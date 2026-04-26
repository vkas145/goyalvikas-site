/* Friday — Lightning Round ⚡  (v2: dense + grade-band aware)
   ─────────────────────────────────────────────────────────────
   Two-phase session:
     1. BUBBLE POP (signature mechanic) — 6 grade-scaled arithmetic
        rounds against floating bubble distractors.
     2. SPEED QUIZ — 6 questions drawn from QUIZ_DATA[grade] (mcq/tf
        mix) so Grade 10 sees Grade-10 maths, not 2+3.
   Total = 12 rounds, ~12-15 minutes. */
(function(){
  'use strict';

  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

  function genArithmeticQ(grade){
    // Grade-scaled arithmetic for the bubble-pop phase.
    let a, b, op;
    if (grade <= 2){
      a = rand(2, 12); b = rand(2, 9);
      op = ['+','−','×'][rand(0,2)];
      if (op === '−' && b > a) [a,b] = [b,a];
    } else if (grade <= 4){
      a = rand(20, 99); b = rand(2, 15);
      op = ['+','−','×'][rand(0,2)];
      if (op === '−' && b > a) [a,b] = [b,a];
    } else if (grade <= 6){
      a = rand(50, 250); b = rand(5, 25);
      op = ['+','−','×','÷'][rand(0,3)];
      if (op === '−' && b > a) [a,b] = [b,a];
      if (op === '÷'){ const ans = rand(2, 15); a = b * ans; }
    } else if (grade <= 8){
      a = rand(100, 500); b = rand(10, 50);
      op = ['+','−','×','÷'][rand(0,3)];
      if (op === '−' && b > a) [a,b] = [b,a];
      if (op === '÷'){ const ans = rand(2, 20); a = b * ans; }
    } else {
      // Senior — squares, percentages, harder products
      const kind = rand(0, 3);
      if (kind === 0){ const x = rand(11, 35); return { q:`${x}² = ?`, ans: x*x }; }
      if (kind === 1){ const p = [10,20,25,40,50][rand(0,4)]; const n = rand(40, 400); return { q:`${p}% of ${n} = ?`, ans: Math.round(n*p/100) }; }
      a = rand(40, 99); b = rand(11, 25);
      op = ['×','÷'][rand(0,1)];
      if (op === '÷'){ const ans = rand(5, 30); a = b * ans; }
    }
    let ans;
    if (op === '+') ans = a + b;
    else if (op === '−') ans = a - b;
    else if (op === '×') ans = a * b;
    else ans = a / b;
    return { q: `${a} ${op} ${b}`, ans };
  }

  function cells(activeIdx, total){
    let s = '';
    for (let i = 0; i < total; i++) s += `<div class="a-progress-cell ${i < activeIdx ? 'done' : i === activeIdx ? 'active' : ''}"></div>`;
    return s;
  }

  // Phase 1: bubble pop with 8 questions (was 6).
  function bubblePhase(container, grade, onDone){
    const total = 8;
    let idx = 0, score = 0;

    container.innerHTML = `
      <div class="a-card">
        <div class="qb-meta">
          <span class="qb-badge">⚡ Phase 1 · Bubble Pop</span>
          <span class="qb-progress" id="lpProg">1 / ${total}</span>
        </div>
        <div class="a-q" id="aQ" style="font-size:30px">…</div>
        <div class="bubble-stage" id="bStage"></div>
        <div class="a-feedback" id="aFb"></div>
      </div>
    `;
    const stage = container.querySelector('#bStage');
    const qEl = container.querySelector('#aQ');
    const fb = container.querySelector('#aFb');
    const prog = container.querySelector('#lpProg');
    let bubbles = []; let raf = null; let activeQ = null;

    function nextRound(){
      if (idx >= total){ cleanup(); onDone(score, total); return; }
      const q = genArithmeticQ(grade);
      activeQ = q;
      qEl.textContent = q.q + ' = ?';
      prog.textContent = `${idx + 1} / ${total}`;
      fb.textContent = ''; fb.className = 'a-feedback';
      bubbles.forEach(b => b.el.remove());
      bubbles = [];
      const answers = new Set([q.ans]);
      while (answers.size < 5){
        const d = q.ans + (rand(0,1) ? 1 : -1) * rand(1, Math.max(2, Math.floor(Math.abs(q.ans)/3) + 2));
        if (d !== q.ans && d > 0) answers.add(d);
      }
      const arr = [...answers];
      for (let i = arr.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
      const stageW = stage.offsetWidth;
      arr.forEach((val, i) => {
        const el = document.createElement('div');
        el.className = 'bubble';
        el.textContent = val;
        const x = (stageW - 64) * (i / Math.max(1, arr.length - 1));
        const y = stage.offsetHeight - 70;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        const speed = (grade <= 2 ? 16 : grade <= 5 ? 22 : 28) + rand(0, 6);
        bubbles.push({ el, val, x, y, vx: (Math.random()-0.5)*1.5, vy: -speed/40 });
        stage.appendChild(el);
        el.addEventListener('click', () => {
          if (el.dataset.popped) return;
          el.dataset.popped = '1';
          if (val === q.ans){
            score++; fb.className = 'a-feedback ok'; fb.textContent = '⚡ Pop!';
            el.style.background = 'linear-gradient(135deg,#86EFAC,#22C55E)';
          } else {
            fb.className = 'a-feedback no'; fb.textContent = `Not quite — answer was ${q.ans}.`;
            el.classList.add('miss');
          }
          idx++; setTimeout(nextRound, 700);
        });
      });
    }

    function tick(){
      bubbles.forEach(b => {
        if (b.el.dataset.popped) return;
        b.x += b.vx; b.y += b.vy;
        if (b.x < 0 || b.x > stage.offsetWidth - 64) b.vx *= -1;
        b.el.style.left = `${b.x}px`;
        b.el.style.top = `${b.y}px`;
      });
      const visible = bubbles.filter(b => b.y > -80 && !b.el.dataset.popped);
      if (!visible.length && activeQ){
        fb.className = 'a-feedback no';
        fb.textContent = `Time's up — answer was ${activeQ.ans}.`;
        idx++; activeQ = null;
        setTimeout(nextRound, 700);
      }
      raf = requestAnimationFrame(tick);
    }

    function cleanup(){ if (raf) cancelAnimationFrame(raf); raf = null; }

    tick(); nextRound();
  }

  // Phase 2: speed quiz from QUIZ_DATA, MCQ-only for fast pacing.
  async function speedQuizPhase(container, grade, onDone){
    const D = window.MM_DAILY;
    let questions = [];
    if (D) questions = D.getQuestionsForGrade(grade, 12, { types: ['mcq'] });
    if (!questions || !questions.length){
      onDone(0, 0); return;
    }
    const QB = window.MM_QBATCH;
    const result = await QB.runBatch(container, questions, {
      themeBadge: '⚡ Phase 2 · Speed Quiz',
      okMsg: '⚡ Pop!'
    });
    onDone(result.score, result.total);
  }

  window.MM_ACT_LIGHTNING_ROUND = function(opts){
    const { grade, container, onComplete } = opts;
    bubblePhase(container, grade, (s1, t1) => {
      speedQuizPhase(container, grade, (s2, t2) => {
        onComplete({ score: s1 + s2, total: t1 + t2 });
      });
    });
  };
})();
