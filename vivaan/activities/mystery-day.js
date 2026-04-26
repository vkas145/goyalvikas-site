/* Sunday — Mystery Day 🔮  (v2: dense + grade-band aware)
   ─────────────────────────────────────────────────────────
   12 questions: 6 reveal-the-picture (grade-scaled arithmetic, MCQ
   choices), then 6 from QUIZ_DATA[grade]. Final reveal "What is it?"
   shows the emoji-art mystery. */
(function(){
  'use strict';

  const MYSTERIES = [
    { name:"Dinosaur",  revealEmoji:'🦖', grid: [
      ['·','·','·','🟢','🟢'],
      ['·','·','🟢','🟢','🟢'],
      ['🟢','🟢','🟢','🟢','👁'],
      ['·','🟢','🟢','🟢','·'],
      ['·','🦴','·','🦴','·']
    ]},
    { name:"Spaceship", revealEmoji:'🚀', grid: [
      ['·','·','🔴','·','·'],
      ['·','🔴','⚪','🔴','·'],
      ['🔴','⚪','⚪','⚪','🔴'],
      ['·','🟠','🟠','🟠','·'],
      ['·','✨','·','✨','·']
    ]},
    { name:"Puppy", revealEmoji:'🐶', grid: [
      ['🟤','·','·','·','🟤'],
      ['🟤','🟤','·','🟤','🟤'],
      ['·','🟤','👁','🟤','·'],
      ['·','·','👃','·','·'],
      ['·','🟤','👅','🟤','·']
    ]},
    { name:"Butterfly", revealEmoji:'🦋', grid: [
      ['🟣','·','·','·','🟣'],
      ['🟣','🟣','·','🟣','🟣'],
      ['🟣','🟣','🟦','🟣','🟣'],
      ['🟣','·','🟦','·','🟣'],
      ['·','·','🟦','·','·']
    ]}
  ];

  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

  function genArithQ(grade){
    let a, b, op;
    if (grade <= 2){ a = rand(2, 30); b = rand(1, 15); op = ['+','−','×'][rand(0,2)]; if (op === '−' && b > a) [a,b] = [b,a]; if (op === '×'){ a = rand(2, 9); b = rand(2, 9); } }
    else if (grade <= 4){ a = rand(20, 100); b = rand(2, 30); op = ['+','−','×'][rand(0,2)]; if (op === '−' && b > a) [a,b] = [b,a]; }
    else if (grade <= 6){ a = rand(50, 400); b = rand(5, 50); op = ['+','−','×','÷'][rand(0,3)]; if (op === '−' && b > a) [a,b] = [b,a]; if (op === '÷'){ const ans = rand(2, 12); a = b * ans; } }
    else if (grade <= 8){ a = rand(100, 999); b = rand(10, 100); op = ['+','−','×','÷'][rand(0,3)]; if (op === '−' && b > a) [a,b] = [b,a]; if (op === '÷'){ const ans = rand(2, 25); a = b * ans; } }
    else {
      const kind = rand(0, 2);
      if (kind === 0){ const x = rand(11, 30); return { q:`${x}² = ?`, ans:x*x, choices:null }; }
      if (kind === 1){ const p = [10,20,25,40,75][rand(0,4)]; const n = rand(40, 400); return { q:`${p}% of ${n} = ?`, ans:Math.round(n*p/100), choices:null }; }
      a = rand(15, 60); b = rand(11, 19);
      op = ['×'][0];
    }
    let ans;
    if (op === '+') ans = a + b;
    else if (op === '−') ans = a - b;
    else if (op === '×') ans = a * b;
    else ans = a / b;
    const set = new Set([ans]);
    while (set.size < 4){ const d = ans + (rand(0,1) ? 1 : -1) * rand(1, Math.max(2, Math.floor(Math.abs(ans)/3) + 2)); if (d !== ans) set.add(d); }
    const choices = [...set];
    for (let i = choices.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [choices[i], choices[j]] = [choices[j], choices[i]]; }
    return { q: `${a} ${op} ${b}`, ans, choices };
  }

  function ensureChoices(q){
    if (q.choices && q.choices.length) return q;
    const ans = q.ans;
    const set = new Set([ans]);
    while (set.size < 4){ const d = ans + (rand(0,1) ? 1 : -1) * rand(1, Math.max(2, Math.floor(Math.abs(ans)/3) + 2)); if (d !== ans) set.add(d); }
    q.choices = [...set]; for (let i = q.choices.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [q.choices[i], q.choices[j]] = [q.choices[j], q.choices[i]]; } return q;
  }

  window.MM_ACT_MYSTERY = function(opts){
    const { grade, container, onComplete } = opts;
    const seed = window.MM_DAILY ? window.MM_DAILY.weekSeed() : 1;
    const myst = MYSTERIES[seed % MYSTERIES.length];
    const totalQ = 20;
    const cellsPerCorrect = Math.max(1, Math.ceil(25 / totalQ));

    // Reveal order — center-out spiral-ish.
    const order = [];
    const center = [2,2];
    const all = [];
    for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) all.push([r,c]);
    all.sort((a,b) => (Math.abs(a[0]-center[0]) + Math.abs(a[1]-center[1])) - (Math.abs(b[0]-center[0]) + Math.abs(b[1]-center[1])));
    all.forEach(p => order.push(p));

    let revealed = new Set();
    let idx = 0, score = 0;

    container.innerHTML = `
      <div class="a-card" style="background:#1F1437;color:#FFF;border-color:#FFF">
        <div class="qb-meta">
          <span class="qb-badge">🔮 What's hiding?</span>
          <span class="qb-progress" id="myProg">1 / ${totalQ}</span>
        </div>
        <div class="mystery-board" id="mBoard"></div>
        <div class="a-q" id="aQ">…</div>
        <div class="a-options" id="aOpts"></div>
        <div class="a-feedback" id="aFb"></div>
      </div>
    `;
    const board = container.querySelector('#mBoard');
    const cellEls = [];
    for (let r = 0; r < 5; r++){
      for (let c = 0; c < 5; c++){
        const el = document.createElement('div');
        el.className = 'mb-cell'; el.textContent = '?';
        cellEls.push({ r, c, el });
        board.appendChild(el);
      }
    }
    function findCell(r, c){ return cellEls.find(x => x.r === r && x.c === c); }
    function reveal(n){
      let got = 0;
      while (got < n){
        const next = order.find(p => !revealed.has(`${p[0]},${p[1]}`));
        if (!next) break;
        revealed.add(`${next[0]},${next[1]}`);
        const cell = findCell(next[0], next[1]);
        if (cell){
          cell.el.classList.add('revealed');
          cell.el.textContent = myst.grid[next[0]][next[1]];
          if (cell.el.textContent === '·') cell.el.textContent = ' ';
        }
        got++;
      }
    }

    // 8 from arithmetic gen, 12 from QUIZ_DATA (mcq only) = 20 total
    const arithCount = grade <= 2 ? 12 : 8;     // younger gets more arith warmup
    const dataCount  = 20 - arithCount;
    const arithQs = [];
    for (let i = 0; i < arithCount; i++) arithQs.push(ensureChoices(genArithQ(grade)));
    const D = window.MM_DAILY;
    const dataQs = D ? D.getQuestionsForGrade(grade, dataCount, { types: ['mcq'] }) : [];
    while (dataQs.length < dataCount) dataQs.push(ensureChoices(genArithQ(grade)));
    const dataAsArith = dataQs.map(q => {
      if (q.o && q.o.length){
        return { q: q.q, ans: q.o[0], choices: q.o.slice() };
      }
      return ensureChoices(q);
    });

    const allQs = arithQs.concat(dataAsArith.slice(0, dataCount));

    function nextQ(){
      if (idx >= totalQ){
        reveal(25);
        setTimeout(() => {
          container.innerHTML = `
            <div class="a-card" style="text-align:center;background:#1F1437;color:#FFF;border-color:#FFF">
              <div class="qb-badge">🔮 Mystery solved!</div>
              <div style="font-size:80px;line-height:1;margin:14px 0">${myst.revealEmoji}</div>
              <div style="font-size:24px;font-weight:900">It's a ${myst.name}!</div>
              <div style="opacity:0.85;margin-top:6px">You scored ${score}/${totalQ}</div>
            </div>
          `;
          setTimeout(() => onComplete({ score, total: totalQ }), 1200);
        }, 600);
        return;
      }
      const q = allQs[idx];
      container.querySelector('#myProg').textContent = `${idx + 1} / ${totalQ}`;
      const qEl = container.querySelector('#aQ');
      const opts = container.querySelector('#aOpts');
      const fb = container.querySelector('#aFb');
      qEl.textContent = q.q;
      fb.textContent = ''; fb.className = 'a-feedback';
      opts.innerHTML = '';
      // Display choices; "correct" detection differs: arith q has numeric ans, data q has text ans.
      const isText = typeof q.ans === 'string';
      // Shuffle choices
      const order2 = q.choices.slice();
      for (let i = order2.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [order2[i], order2[j]] = [order2[j], order2[i]]; }
      order2.forEach(c => {
        const b = document.createElement('button');
        b.className = 'opt-btn'; b.textContent = c;
        b.onclick = () => {
          const isOk = isText ? (String(c) === String(q.ans)) : (parseFloat(c) === q.ans);
          opts.querySelectorAll('button').forEach(x => {
            x.disabled = true;
            const v = isText ? (x.textContent === String(q.ans)) : (parseFloat(x.textContent) === q.ans);
            if (v) x.classList.add('correct');
          });
          if (!isOk) b.classList.add('wrong');
          if (isOk){ fb.className='a-feedback ok'; fb.textContent='✨ Reveal!'; reveal(cellsPerCorrect); score++; }
          else { fb.className='a-feedback no'; fb.textContent=`Answer was ${q.ans}.`; reveal(1); }
          setTimeout(() => { idx++; nextQ(); }, 900);
        };
        opts.appendChild(b);
      });
    }
    nextQ();
  };
})();
