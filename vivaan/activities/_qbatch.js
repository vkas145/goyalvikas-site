/* Shared question-batch renderer for daily activities.
   ─────────────────────────────────────────────────────
   Renders one question at a time into the activity surface and
   resolves a Promise with `{ok:bool}` when the kid answers + clicks
   Next. Handles all 5 quiz-data types: mcq (default), tf, fillin,
   tapall, enterval.

   Intended use inside an activity's run(): repeatedly call
     await window.MM_QBATCH.run(container, q, theme);
   per question, sum the okays for scoring. */
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

  function makeShell(progressLabel, themeBadge){
    return `
      <div class="a-card">
        <div class="qb-meta">
          <span class="qb-badge">${themeBadge || ''}</span>
          <span class="qb-progress">${progressLabel || ''}</span>
        </div>
        <div class="a-q" id="qbQ"></div>
        <div id="qbBody"></div>
        <div class="a-feedback" id="qbFb"></div>
        <button class="a-next" id="qbNext" type="button">Next →</button>
      </div>
    `;
  }

  function renderMCQ(body, q){
    // q.o has 4 options; correct ALWAYS at index 0. Engine shuffles.
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

  // Renders one question into container, returns Promise<{ok, total}>.
  // theme = { badge:'👑 The King asks', okMsg:'…', noMsg:'…' } — optional
  async function runOne(container, q, opts){
    opts = opts || {};
    container.innerHTML = makeShell(opts.progressLabel || '', opts.themeBadge || '');
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

    if (result.ok){
      fbEl.className = 'a-feedback ok';
      fbEl.textContent = (opts.okMsg || '✅ Correct!');
    } else {
      fbEl.className = 'a-feedback no';
      fbEl.textContent = `❌ Answer: ${result.correctText}`;
    }
    nextBtn.classList.add('show');
    return new Promise(resolve => {
      nextBtn.onclick = () => resolve(result);
    });
  }

  // Run a batch of questions sequentially. Returns Promise<{score,total}>.
  async function runBatch(container, questions, opts){
    opts = opts || {};
    let score = 0;
    const total = questions.length;
    for (let i = 0; i < total; i++){
      const result = await runOne(container, questions[i], {
        progressLabel: `${i + 1} / ${total}`,
        themeBadge:    opts.themeBadge || '',
        okMsg:         opts.okMsg
      });
      if (result.ok) score++;
    }
    return { score, total };
  }

  window.MM_QBATCH = { runOne, runBatch };
})();
