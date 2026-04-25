/* Friday — Lightning Round ⚡
   Number Bubble Pop. A question shows; answer bubbles drift across.
   Tap the right one before it floats off-screen. Gentle: no game-over,
   the round ends after N questions and you score whatever you got. */
(function(){
  'use strict';

  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

  function genQ(grade){
    let a, b, op;
    if (grade <= 2){ a = rand(2, 12); b = rand(2, 9); op = ['+','−','×'][rand(0,2)]; if (op === '−' && b > a) [a,b] = [b,a]; }
    else if (grade <= 4){ a = rand(10, 60); b = rand(2, 12); op = ['+','−','×'][rand(0,2)]; if (op === '−' && b > a) [a,b] = [b,a]; }
    else { a = rand(20, 200); b = rand(5, 25); op = ['+','−','×','÷'][rand(0,3)]; if (op === '−' && b > a) [a,b] = [b,a]; if (op === '÷'){ const ans = rand(2, 12); a = b * ans; } }
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

  window.MM_ACT_LIGHTNING_ROUND = function(opts){
    const { grade, container, onComplete } = opts;
    const total = 8;
    let idx = 0, score = 0;

    container.innerHTML = `
      <div class="a-card">
        <div class="a-progress" id="aProg">${cells(0, total)}</div>
        <div style="text-align:center;font-size:14px;font-weight:700;opacity:0.7;margin-bottom:6px">⚡ Pop the right answer!</div>
        <div class="a-q" id="aQ" style="font-size:30px">…</div>
        <div class="bubble-stage" id="bStage"></div>
        <div class="a-feedback" id="aFb"></div>
      </div>
    `;

    const stage = container.querySelector('#bStage');
    const qEl = container.querySelector('#aQ');
    const fb = container.querySelector('#aFb');
    const prog = container.querySelector('#aProg');

    let bubbles = [];
    let raf = null;
    let activeQ = null;

    function nextRound(){
      if (idx >= total){
        cleanup();
        setTimeout(() => onComplete({ score, total }), 400);
        return;
      }
      const q = genQ(grade);
      activeQ = q;
      qEl.textContent = q.q + ' = ?';
      prog.innerHTML = cells(idx, total);
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
        const speed = (grade <= 2 ? 18 : grade <= 4 ? 24 : 30) + rand(0, 8);
        bubbles.push({ el, val, x, y, vx: (Math.random()-0.5)*1.5, vy: -speed/40 });
        stage.appendChild(el);
        el.addEventListener('click', () => {
          if (el.dataset.popped) return;
          el.dataset.popped = '1';
          if (val === q.ans){
            score++;
            fb.className = 'a-feedback ok'; fb.textContent = '⚡ Pop!';
            el.style.background = 'linear-gradient(135deg,#86EFAC,#22C55E)';
          } else {
            fb.className = 'a-feedback no'; fb.textContent = `Not quite — answer was ${q.ans}.`;
            el.classList.add('miss');
          }
          idx++;
          setTimeout(nextRound, 700);
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
        fb.textContent = `Time's up! Answer was ${activeQ.ans}.`;
        idx++;
        activeQ = null;
        setTimeout(nextRound, 700);
      }
      raf = requestAnimationFrame(tick);
    }

    function cleanup(){
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    }

    tick();
    nextRound();
  };
})();
