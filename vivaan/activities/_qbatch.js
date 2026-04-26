/* Shared question-batch renderer for daily activities.  v3 — fun edition.
   ────────────────────────────────────────────────────────────────────────
   Adds: combo tracker, milestone celebrations, animated feedback, random
   encouraging messages, short non-music click/correct/wrong SFX. The
   "boring quiz" feel is gone: every correct answer now has a payoff.

   Public API (unchanged):
     await window.MM_QBATCH.runOne(container, q, opts)
     await window.MM_QBATCH.runBatch(container, questions, opts)
*/
(function(){
  'use strict';

  function shuffle(arr){
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  // ─── Tiny audio engine for SFX (independent from background music)
  // Always on (unless user has muted browser tab); short, clean ramps.
  let SFX = { ctx:null, master:null };
  function ensureSfx(){
    if (SFX.ctx) return true;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return false;
      SFX.ctx = new Ctx();
      SFX.master = SFX.ctx.createGain();
      SFX.master.gain.value = 0.18;
      SFX.master.connect(SFX.ctx.destination);
      return true;
    } catch(e){ return false; }
  }
  function tone(freq, dur, type, peak, when){
    if (!ensureSfx()) return;
    if (SFX.ctx.state === 'suspended') SFX.ctx.resume().catch(()=>{});
    const t0 = (when || SFX.ctx.currentTime);
    const o = SFX.ctx.createOscillator();
    const g = SFX.ctx.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(peak || 0.3, t0 + 0.005);
    g.gain.linearRampToValueAtTime(0, t0 + dur);
    o.connect(g); g.connect(SFX.master);
    o.start(t0); o.stop(t0 + dur + 0.02);
  }
  function sfxCorrect(){ tone(660, 0.10, 'triangle', 0.30); tone(990, 0.12, 'triangle', 0.24, (SFX.ctx?SFX.ctx.currentTime+0.06:0)); }
  function sfxWrong(){   tone(220, 0.18, 'sawtooth', 0.20); }
  function sfxCombo(){   tone(880, 0.08, 'square', 0.22); tone(1320, 0.08, 'square', 0.20, (SFX.ctx?SFX.ctx.currentTime+0.05:0)); tone(1760, 0.10, 'square', 0.18, (SFX.ctx?SFX.ctx.currentTime+0.10:0)); }
  function sfxMilestone(){
    if (!ensureSfx()) return;
    const t = SFX.ctx.currentTime;
    [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.18, 'triangle', 0.28, t + i*0.06));
  }

  // ─── Random encouraging messages (rotate so it doesn't get stale)
  const OK_MESSAGES = ['🎉 Brilliant!', '⚡ Lightning fast!', '🌟 Genius!', '💪 Amazing!', '🔥 You\'re on fire!', '🚀 Spot on!', '✨ Perfect!', '🎯 Nailed it!', '👏 Beautiful!', '🏆 Champion!'];
  const NO_MESSAGES = ['Try again next time! 💪', 'Close one! 🤏', 'Keep going! 🚀', 'You\'ve got this! ⭐', 'Onward, hero! 💎'];
  function pick(arr){ return arr[Math.floor(Math.random() * arr.length)]; }

  // ─── Run state shared across a batch run
  // We track combo across the activity-level batch by reading/writing on
  // the container's dataset. Each activity gets a fresh combo starting
  // from 0 when its container is first used.
  function getCombo(container){ return parseInt(container.dataset.combo || '0', 10); }
  function setCombo(container, n){ container.dataset.combo = String(n); }
  function getScore(container){ return parseInt(container.dataset.score || '0', 10); }
  function setScore(container, n){ container.dataset.score = String(n); }
  function getCounter(container){ return parseInt(container.dataset.qNum || '0', 10); }
  function setCounter(container, n){ container.dataset.qNum = String(n); }

  // ─── Celebration overlay (transient)
  function celebrate(container, text, big){
    const ov = document.createElement('div');
    ov.className = 'qb-celebrate' + (big ? ' big' : '');
    ov.innerHTML = text;
    container.appendChild(ov);
    setTimeout(() => ov.classList.add('show'), 30);
    setTimeout(() => ov.classList.remove('show'), 1500);
    setTimeout(() => ov.remove(), 1800);
  }

  // ─── Milestone confetti (small burst)
  function smallConfetti(container){
    const cv = document.createElement('canvas');
    cv.className = 'qb-confetti';
    cv.width = container.offsetWidth || 600;
    cv.height = 200;
    container.appendChild(cv);
    const ctx = cv.getContext('2d');
    const ps = Array.from({length:42}, () => ({
      x: cv.width/2 + (Math.random()-0.5)*30,
      y: 0,
      r: Math.random()*5+3,
      c: `hsl(${Math.random()*360},90%,60%)`,
      vx: (Math.random()-0.5)*5,
      vy: Math.random()*3+2,
      a: Math.random()*360
    }));
    let f = 0;
    const draw = () => {
      ctx.clearRect(0,0,cv.width,cv.height);
      ps.forEach(p => {
        ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.a*Math.PI/180);
        ctx.fillStyle = p.c; ctx.fillRect(-p.r,-p.r/2,p.r*2,p.r);
        ctx.restore();
        p.x += p.vx; p.y += p.vy; p.a += 6; p.vy += 0.08;
      });
      if (f++ < 60) requestAnimationFrame(draw);
      else cv.remove();
    };
    draw();
  }

  function makeShell(progressLabel, themeBadge, comboCount){
    const comboHtml = comboCount >= 2
      ? `<span class="qb-combo">🔥 ${comboCount}× combo</span>`
      : '';
    return `
      <div class="a-card">
        <div class="qb-meta">
          <span class="qb-badge">${themeBadge || ''}</span>
          <span class="qb-progress">${progressLabel || ''}</span>
        </div>
        ${comboHtml}
        <div class="a-q" id="qbQ"></div>
        <div id="qbBody"></div>
        <div class="a-feedback" id="qbFb"></div>
        <button class="a-next" id="qbNext" type="button">Next →</button>
      </div>
    `;
  }

  function renderMCQ(body, q){
    const correct = q.o[0];
    const order = shuffle(q.o);
    body.innerHTML = `<div class="a-options">${order.map((o,i) => `<button class="opt-btn" data-i="${i}">${escapeHtml(o)}</button>`).join('')}</div>`;
    return new Promise(resolve => {
      body.querySelectorAll('.opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const picked = order[parseInt(btn.dataset.i, 10)];
          const ok = picked === correct;
          body.querySelectorAll('.opt-btn').forEach(b => {
            b.disabled = true;
            const v = order[parseInt(b.dataset.i, 10)];
            if (v === correct) b.classList.add('correct');
          });
          if (!ok) btn.classList.add('wrong');
          resolve({ ok, correctText: correct });
        });
      });
    });
  }

  function renderTF(body, q){
    body.innerHTML = `
      <div class="a-tf">
        <button class="opt-btn" data-v="true">✓ TRUE</button>
        <button class="opt-btn" data-v="false">✗ FALSE</button>
      </div>
    `;
    return new Promise(resolve => {
      body.querySelectorAll('.opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const picked = btn.dataset.v === 'true';
          const ok = picked === !!q.a;
          body.querySelectorAll('.opt-btn').forEach(b => {
            b.disabled = true;
            const bv = b.dataset.v === 'true';
            if (bv === !!q.a) b.classList.add('correct');
          });
          if (!ok) btn.classList.add('wrong');
          resolve({ ok, correctText: q.a ? 'TRUE' : 'FALSE' });
        });
      });
    });
  }

  function renderFillin(body, q){
    body.innerHTML = `
      <div class="a-input-row">
        <input class="a-input" id="qbInput" autocomplete="off" inputmode="text" />
        <button class="a-submit" id="qbSubmit" type="button">Answer</button>
      </div>
    `;
    const inp = body.querySelector('#qbInput');
    const sub = body.querySelector('#qbSubmit');
    setTimeout(() => inp && inp.focus(), 30);
    return new Promise(resolve => {
      function go(){
        const v = (inp.value || '').trim().toLowerCase();
        const ok = (q.blanks || []).some(b => String(b).trim().toLowerCase() === v);
        sub.disabled = true; inp.disabled = true;
        if (ok) sub.classList.add('correct'); else sub.classList.add('wrong');
        resolve({ ok, correctText: (q.blanks || []).join(' / ') });
      }
      sub.onclick = go;
      inp.onkeydown = (e) => { if (e.key === 'Enter') go(); };
    });
  }

  function renderTapAll(body, q){
    const pool = q.pool || [];
    const correctSet = new Set(q.correct || []);
    body.innerHTML = `
      <div style="font-size:13px;font-weight:700;opacity:0.7;margin-bottom:6px;text-align:center">Tap all that apply, then Submit</div>
      <div class="a-options" id="taPool"></div>
      <button class="a-submit" id="qbSubmit" type="button" style="margin:10px auto 0;display:block">Submit</button>
    `;
    const wrap = body.querySelector('#taPool');
    pool.forEach(p => {
      const b = document.createElement('button');
      b.className = 'opt-btn'; b.textContent = p; b.dataset.picked = '0';
      b.onclick = () => {
        const cur = b.dataset.picked === '1';
        b.dataset.picked = cur ? '0' : '1';
        b.style.background = cur ? '' : '#86EFAC';
        b.style.transform = cur ? '' : 'scale(0.96)';
      };
      wrap.appendChild(b);
    });
    const sub = body.querySelector('#qbSubmit');
    return new Promise(resolve => {
      sub.onclick = () => {
        const picks = [...wrap.querySelectorAll('.opt-btn')].filter(x => x.dataset.picked === '1').map(x => x.textContent);
        const pickSet = new Set(picks);
        const ok = pickSet.size === correctSet.size && [...pickSet].every(p => correctSet.has(p));
        wrap.querySelectorAll('.opt-btn').forEach(b => {
          b.disabled = true;
          if (correctSet.has(b.textContent)) b.style.background = pickSet.has(b.textContent) ? '#22C55E' : '#FEF3C7';
          else if (pickSet.has(b.textContent)) b.style.background = '#FCA5A5';
        });
        sub.disabled = true;
        resolve({ ok, correctText: q.correct.join(', ') });
      };
    });
  }

  function renderEnterVal(body, q){
    body.innerHTML = `
      <div class="a-input-row">
        <input class="a-input" id="qbInput" inputmode="numeric" pattern="[0-9-]*" autocomplete="off" />
        <button class="a-submit" id="qbSubmit" type="button">Answer</button>
      </div>
    `;
    const inp = body.querySelector('#qbInput');
    const sub = body.querySelector('#qbSubmit');
    setTimeout(() => inp && inp.focus(), 30);
    return new Promise(resolve => {
      function go(){
        const v = parseFloat(inp.value);
        const ok = !isNaN(v) && v === q.a;
        sub.disabled = true; inp.disabled = true;
        if (ok) sub.classList.add('correct'); else sub.classList.add('wrong');
        resolve({ ok, correctText: String(q.a) });
      }
      sub.onclick = go;
      inp.onkeydown = (e) => { if (e.key === 'Enter') go(); };
    });
  }

  // ─── Run one question with feedback + combo + celebrations
  async function runOne(container, q, opts){
    opts = opts || {};
    const combo = getCombo(container);
    container.innerHTML = makeShell(opts.progressLabel || '', opts.themeBadge || '', combo);
    const qEl = container.querySelector('#qbQ');
    const bodyEl = container.querySelector('#qbBody');
    const fbEl = container.querySelector('#qbFb');
    const nextBtn = container.querySelector('#qbNext');
    qEl.textContent = q.q || '';

    let result;
    if (!q.type)              result = await renderMCQ(bodyEl, q);
    else if (q.type === 'tf') result = await renderTF(bodyEl, q);
    else if (q.type === 'fillin') result = await renderFillin(bodyEl, q);
    else if (q.type === 'tapall') result = await renderTapAll(bodyEl, q);
    else if (q.type === 'enterval') result = await renderEnterVal(bodyEl, q);
    else result = { ok:false, correctText:'?' };

    // Update combo + score state on container so it persists across runOne calls
    let newCombo;
    if (result.ok){
      newCombo = combo + 1;
      sfxCorrect();
      fbEl.className = 'a-feedback ok';
      fbEl.textContent = pick(OK_MESSAGES);
      if (newCombo === 3) { sfxCombo(); celebrate(container, '🔥 COMBO ×3!'); }
      else if (newCombo === 5) { sfxMilestone(); celebrate(container, '🔥🔥 ON FIRE!', true); smallConfetti(container); }
      else if (newCombo === 8) { sfxMilestone(); celebrate(container, '⚡ UNSTOPPABLE!', true); smallConfetti(container); }
      else if (newCombo === 12) { sfxMilestone(); celebrate(container, '👑 LEGENDARY!', true); smallConfetti(container); }
      else if (newCombo === 16) { sfxMilestone(); celebrate(container, '🏆 PERFECTION!', true); smallConfetti(container); }
    } else {
      newCombo = 0;
      sfxWrong();
      fbEl.className = 'a-feedback no';
      fbEl.textContent = `❌ ${pick(NO_MESSAGES)} (Answer: ${result.correctText})`;
    }
    setCombo(container, newCombo);

    nextBtn.classList.add('show');
    return new Promise(resolve => {
      nextBtn.onclick = () => resolve(result);
    });
  }

  // ─── Run a batch of questions sequentially, with mid-batch milestones
  async function runBatch(container, questions, opts){
    opts = opts || {};
    setCombo(container, 0);
    setScore(container, 0);
    setCounter(container, 0);
    let score = 0;
    const total = questions.length;
    for (let i = 0; i < total; i++){
      setCounter(container, i + 1);
      const result = await runOne(container, questions[i], {
        progressLabel: `${i + 1} / ${total}`,
        themeBadge:    opts.themeBadge || '',
        okMsg:         opts.okMsg
      });
      if (result.ok) score++;
      setScore(container, score);

      // Halfway and three-quarter cheer
      if (i === Math.floor(total/2) - 1 && score >= Math.floor(total/3)) {
        celebrate(container, '✨ Halfway there!');
      } else if (i === total - Math.ceil(total/4) - 1 && score >= Math.floor(total/2)) {
        celebrate(container, '💎 Final stretch!');
      }
    }
    return { score, total };
  }

  window.MM_QBATCH = { runOne, runBatch };
})();
