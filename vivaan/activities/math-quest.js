/* Thursday — Math Quest 📖  (v2: dense + grade-band aware)
   ─────────────────────────────────────────────────────────────
   Story-shell with comic-strip panels. Each panel poses a question.
   Wrong answer → friendly hint + retry once → reveal answer.
   G1-2: 12 panels with grade-2 word problems
   G3-10: 12 panels with QUIZ_DATA-drawn grade-correct questions
          framed as story scenes ("Hero in Class N's adventure"). */
(function(){
  'use strict';

  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

  // Visual emoji panels (theme dressing). Cycles through these for each
  // question's "scene".
  const SCENE_EMOJIS_KIDS  = ['🎈','🎂','🛍️','🎁','🍪','🐶','🚂','🌟','🎨','🍕','🎯','🏆'];
  const SCENE_EMOJIS_OLDER = ['🚀','🗺️','🔭','📜','⛰️','🏛️','🌌','⚙️','🧭','🎯','💎','🏆'];

  function genWordKids(grade){
    // Light-touch word problems for G1-2.
    const r = rand(0, 4);
    if (r === 0){ const a = rand(5, 30), b = rand(2, 15); return { q:`Anu had ${a} marbles. She gave ${b} away. How many left?`, ans:a-b }; }
    if (r === 1){ const groups = rand(2, 5), each = rand(3, 8); return { q:`${groups} bags of ${each} candies each. Total candies?`, ans:groups*each }; }
    if (r === 2){ const a = rand(3, 9), b = rand(3, 9); return { q:`${a} red balloons + ${b} blue balloons = ?`, ans:a+b }; }
    if (r === 3){ const total = rand(10, 30), have = Math.floor(total/2); return { q:`Need ${total} chairs. Have ${have}. How many more?`, ans:total-have }; }
    const a = rand(20, 80); return { q:`A puppy weighs ${a} kg in summer, gains 5 kg in winter. New weight?`, ans:a+5 };
  }

  function cells(activeIdx, total){
    let s = '';
    for (let i = 0; i < total; i++) s += `<div class="a-progress-cell ${i < activeIdx ? 'done' : i === activeIdx ? 'active' : ''}"></div>`;
    return s;
  }

  // Render a kids word-problem panel
  function kidsPanel(container, idx, total, scene, q, onAnswer){
    let attempts = 0;
    container.innerHTML = `
      <div class="a-card">
        <div class="qb-meta">
          <span class="qb-badge">📖 Hero's Quest · Panel ${idx + 1}/${total}</span>
          <span class="qb-progress">${idx + 1} / ${total}</span>
        </div>
        <div style="text-align:center;font-size:64px;line-height:1;margin:6px 0">${scene}</div>
        <div class="a-q" style="font-size:18px">${q.q}</div>
        <div class="a-input-row">
          <input class="a-input" id="mqInp" inputmode="numeric" pattern="[0-9-]*" autocomplete="off" />
          <button class="a-submit" id="mqSub" type="button">Answer</button>
        </div>
        <div class="a-feedback" id="aFb" style="margin-top:10px"></div>
      </div>
    `;
    const inp = container.querySelector('#mqInp');
    const sub = container.querySelector('#mqSub');
    const fb = container.querySelector('#aFb');
    inp.focus();
    const submit = () => {
      const v = parseFloat(inp.value);
      const ok = !isNaN(v) && v === q.ans;
      if (ok){
        fb.className = 'a-feedback ok';
        fb.textContent = attempts === 0 ? '✨ Spot on, hero!' : '✨ Got it on retry — onwards!';
        sub.disabled = true; inp.disabled = true;
        setTimeout(() => onAnswer(attempts === 0), 800);
      } else {
        attempts++;
        fb.className = 'a-feedback no';
        if (attempts === 1){ fb.textContent = '🤔 Hmm, try once more!'; inp.value = ''; inp.focus(); }
        else {
          fb.textContent = `Heroes never give up — answer was ${q.ans}.`;
          sub.disabled = true; inp.disabled = true;
          setTimeout(() => onAnswer(false), 1300);
        }
      }
    };
    sub.onclick = submit;
    inp.onkeydown = (e) => { if (e.key === 'Enter') submit(); };
  }

  // Render an older-grade panel using a QUIZ_DATA question
  function olderPanel(container, idx, total, scene, dq, onAnswer){
    container.innerHTML = `
      <div class="a-card">
        <div class="qb-meta">
          <span class="qb-badge">📜 Quest · Scene ${idx + 1}/${total}</span>
          <span class="qb-progress">${idx + 1} / ${total}</span>
        </div>
        <div style="text-align:center;font-size:56px;line-height:1;margin:4px 0">${scene}</div>
        <div class="a-q" style="font-size:18px">${dq.q}</div>
        <div id="qbBody"></div>
        <div class="a-feedback" id="aFb" style="margin-top:10px"></div>
        <button class="a-next" id="aNext" type="button">Next scene →</button>
      </div>
    `;
    const body = container.querySelector('#qbBody');
    const fb = container.querySelector('#aFb');
    const next = container.querySelector('#aNext');

    function done(ok, correctText){
      fb.className = ok ? 'a-feedback ok' : 'a-feedback no';
      fb.textContent = ok ? '✨ Onwards, hero!' : `Answer: ${correctText}`;
      next.classList.add('show');
      next.textContent = idx + 1 < total ? 'Next scene →' : 'Quest end →';
      next.onclick = () => onAnswer(ok);
    }

    if (!dq.type && dq.o){
      const correct = dq.o[0];
      const order = dq.o.slice();
      for (let i = order.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [order[i], order[j]] = [order[j], order[i]]; }
      body.innerHTML = `<div class="a-options">${order.map(o => `<button class="opt-btn">${o}</button>`).join('')}</div>`;
      body.querySelectorAll('.opt-btn').forEach(b => {
        b.onclick = () => {
          const ok = b.textContent === correct;
          body.querySelectorAll('.opt-btn').forEach(x => { x.disabled = true; if (x.textContent === correct) x.classList.add('correct'); });
          if (!ok) b.classList.add('wrong');
          done(ok, correct);
        };
      });
    } else if (dq.type === 'tf'){
      body.innerHTML = `<div class="a-tf"><button class="opt-btn" data-v="true">✓ TRUE</button><button class="opt-btn" data-v="false">✗ FALSE</button></div>`;
      body.querySelectorAll('.opt-btn').forEach(b => {
        b.onclick = () => {
          const picked = b.dataset.v === 'true';
          const ok = picked === !!dq.a;
          body.querySelectorAll('.opt-btn').forEach(x => { x.disabled = true; if ((x.dataset.v === 'true') === !!dq.a) x.classList.add('correct'); });
          if (!ok) b.classList.add('wrong');
          done(ok, dq.a ? 'TRUE' : 'FALSE');
        };
      });
    } else if (dq.type === 'enterval'){
      body.innerHTML = `<div class="a-input-row"><input class="a-input" id="mqInp" inputmode="numeric" /><button class="a-submit" id="mqSub" type="button">Answer</button></div>`;
      const inp = body.querySelector('#mqInp'); const sub = body.querySelector('#mqSub');
      inp.focus();
      const submit = () => {
        const v = parseFloat(inp.value);
        const ok = !isNaN(v) && v === dq.a;
        sub.disabled = true; inp.disabled = true;
        done(ok, String(dq.a));
      };
      sub.onclick = submit; inp.onkeydown = (e) => { if (e.key === 'Enter') submit(); };
    } else if (dq.type === 'fillin'){
      body.innerHTML = `<div class="a-input-row"><input class="a-input" id="mqInp" /><button class="a-submit" id="mqSub" type="button">Answer</button></div>`;
      const inp = body.querySelector('#mqInp'); const sub = body.querySelector('#mqSub');
      inp.focus();
      const submit = () => {
        const v = (inp.value||'').trim().toLowerCase();
        const ok = (dq.blanks||[]).some(b => String(b).trim().toLowerCase() === v);
        sub.disabled = true; inp.disabled = true;
        done(ok, (dq.blanks||[]).join(' / '));
      };
      sub.onclick = submit; inp.onkeydown = (e) => { if (e.key === 'Enter') submit(); };
    } else {
      // Unknown — skip
      done(false, '?');
    }
  }

  window.MM_ACT_MATH_QUEST = function(opts){
    const { grade, container, onComplete } = opts;
    const D = window.MM_DAILY;
    const total = 20;
    const scenes = grade <= 2 ? SCENE_EMOJIS_KIDS : SCENE_EMOJIS_OLDER;

    let idx = 0, score = 0;

    function nextPanel(){
      if (idx >= total){
        container.innerHTML = `
          <div class="a-card" style="text-align:center">
            <div class="qb-badge">📜 Quest complete</div>
            <div style="font-size:64px;line-height:1;margin:14px 0">🏆</div>
            <div style="font-size:24px;font-weight:900">The End!</div>
            <div style="opacity:0.8;margin-top:6px">Hero score: ${score}/${total}</div>
          </div>
        `;
        setTimeout(() => onComplete({ score, total }), 1100);
        return;
      }
      const scene = scenes[idx % scenes.length];
      if (grade <= 2){
        const q = genWordKids(grade);
        kidsPanel(container, idx, total, scene, q, ok => { if (ok) score++; idx++; nextPanel(); });
      } else {
        // Pre-fetch one question at a time as needed (or batch upfront — let's batch)
        if (!nextPanel._cache){
          nextPanel._cache = D.getQuestionsForGrade(grade, total);
        }
        const dq = nextPanel._cache[idx];
        if (!dq){ idx++; nextPanel(); return; }
        olderPanel(container, idx, total, scene, dq, ok => { if (ok) score++; idx++; nextPanel(); });
      }
    }
    nextPanel();
  };
})();
