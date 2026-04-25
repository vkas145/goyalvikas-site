/* Sunday — Mystery Day 🔮
   Hidden picture revealed cell-by-cell as the kid answers questions.
   Final reveal "What is it?" with an emoji-art image. */
(function(){
  'use strict';

  // Each mystery is a 5-row × 5-col grid. The "image" is encoded as the
  // emoji each cell shows when revealed. Total cells = 25; we ask 8
  // questions and reveal ~3 cells per correct answer (proportional).
  // Picks rotate weekly.
  const MYSTERIES = [
    { name:"Dinosaur", revealEmoji:'🦖', grid: [
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

  function genQ(grade){
    let a, b, op;
    if (grade <= 2){ a = rand(2, 30); b = rand(1, 15); op = ['+','−','×'][rand(0,2)]; if (op === '−' && b > a) [a,b] = [b,a]; if (op === '×'){ a = rand(2, 9); b = rand(2, 9); } }
    else if (grade <= 4){ a = rand(20, 100); b = rand(2, 30); op = ['+','−','×'][rand(0,2)]; if (op === '−' && b > a) [a,b] = [b,a]; }
    else { a = rand(50, 400); b = rand(5, 50); op = ['+','−','×','÷'][rand(0,3)]; if (op === '−' && b > a) [a,b] = [b,a]; if (op === '÷'){ const ans = rand(2, 12); a = b * ans; } }
    let ans;
    if (op === '+') ans = a + b;
    else if (op === '−') ans = a - b;
    else if (op === '×') ans = a * b;
    else ans = a / b;
    // 4 choices; correct + 3 distractors
    const set = new Set([ans]);
    while (set.size < 4){ const d = ans + (rand(0,1) ? 1 : -1) * rand(1, Math.max(2, Math.floor(Math.abs(ans)/3) + 2)); if (d !== ans) set.add(d); }
    const choices = [...set];
    for (let i = choices.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [choices[i], choices[j]] = [choices[j], choices[i]]; }
    return { q: `${a} ${op} ${b}`, ans, choices };
  }

  function cells(activeIdx, total){
    let s = '';
    for (let i = 0; i < total; i++) s += `<div class="a-progress-cell ${i < activeIdx ? 'done' : i === activeIdx ? 'active' : ''}"></div>`;
    return s;
  }

  window.MM_ACT_MYSTERY = function(opts){
    const { grade, container, onComplete } = opts;
    const seed = window.MM_DAILY ? window.MM_DAILY.weekSeed() : 1;
    const myst = MYSTERIES[seed % MYSTERIES.length];
    const totalQ = 8;
    const cellsPerCorrect = Math.ceil(25 / totalQ);

    // Order in which cells are revealed (by index 0..24): center-out spiral-ish
    const order = [];
    const center = [2,2];
    const all = [];
    for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) all.push([r,c]);
    all.sort((a,b) => {
      const da = Math.abs(a[0] - center[0]) + Math.abs(a[1] - center[1]);
      const db = Math.abs(b[0] - center[0]) + Math.abs(b[1] - center[1]);
      return da - db;
    });
    all.forEach(p => order.push(p));

    let revealed = new Set();
    let idx = 0, score = 0;

    container.innerHTML = `
      <div class="a-card" style="background:#1F1437;color:#FFF;border-color:#FFF">
        <div class="a-progress">${cells(0, totalQ)}</div>
        <div style="text-align:center;font-size:14px;font-weight:700;opacity:0.85;margin-bottom:6px">🔮 What's hiding?</div>
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

    function nextQ(){
      if (idx >= totalQ){
        // Reveal the rest
        reveal(25);
        setTimeout(() => {
          container.innerHTML = `
            <div class="a-card" style="text-align:center;background:#1F1437;color:#FFF;border-color:#FFF">
              <div style="font-size:14px;font-weight:700;opacity:0.8">🔮 Mystery solved!</div>
              <div style="font-size:80px;line-height:1;margin:14px 0">${myst.revealEmoji}</div>
              <div style="font-size:24px;font-weight:900">It's a ${myst.name}!</div>
              <div style="opacity:0.85;margin-top:6px">You scored ${score}/${totalQ}</div>
            </div>
          `;
          setTimeout(() => onComplete({ score, total: totalQ }), 1200);
        }, 600);
        return;
      }
      const q = genQ(grade);
      container.querySelector('.a-progress').innerHTML = cells(idx, totalQ);
      const qEl = container.querySelector('#aQ');
      const opts = container.querySelector('#aOpts');
      const fb = container.querySelector('#aFb');
      qEl.textContent = `${q.q} = ?`;
      fb.textContent = ''; fb.className = 'a-feedback';
      opts.innerHTML = '';
      q.choices.forEach(c => {
        const b = document.createElement('button');
        b.className = 'opt-btn'; b.textContent = c;
        b.onclick = () => {
          const isOk = c === q.ans;
          opts.querySelectorAll('button').forEach(x => { x.disabled = true; if (parseInt(x.textContent,10) === q.ans) x.classList.add('correct'); });
          if (!isOk) b.classList.add('wrong');
          if (isOk){ fb.className='a-feedback ok'; fb.textContent='✨ Reveal!'; reveal(cellsPerCorrect); score++; }
          else { fb.className='a-feedback no'; fb.textContent=`Answer was ${q.ans}. The mystery hides…`; reveal(1); }
          setTimeout(() => { idx++; nextQ(); }, 900);
        };
        opts.appendChild(b);
      });
    }
    nextQ();
  };
})();
