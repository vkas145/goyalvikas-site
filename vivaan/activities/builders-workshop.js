/* Saturday — Builder's Workshop 🏗️
   Block Tower: target number shown, kid taps hundreds/tens/ones blocks
   to build it. Small "balance scale" round at the end:
     5 + ? = 9. Drag (or tap) the right number to balance. */
(function(){
  'use strict';

  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

  function genTarget(grade){
    if (grade <= 2) return rand(20, 99);
    if (grade <= 4) return rand(100, 999);
    return rand(200, 999);
  }
  function digits(n){ return String(n).split('').map(c => parseInt(c, 10)); }

  function cells(activeIdx, total){
    let s = '';
    for (let i = 0; i < total; i++) s += `<div class="a-progress-cell ${i < activeIdx ? 'done' : i === activeIdx ? 'active' : ''}"></div>`;
    return s;
  }

  function blockRound(container, idx, total, grade, onAnswer){
    const target = genTarget(grade);
    const ds = digits(target);
    const places = ['ones','tens','hundreds','thousands'].slice(0, ds.length).reverse();
    const placeValMap = { ones:1, tens:10, hundreds:100, thousands:1000 };
    let counts = { ones:0, tens:0, hundreds:0, thousands:0 };

    container.innerHTML = `
      <div class="a-card">
        <div class="a-progress">${cells(idx, total)}</div>
        <div style="text-align:center;font-size:14px;font-weight:700;opacity:0.7;margin-bottom:6px">🤖 The builder says…</div>
        <div class="a-q">Build <span style="font-size:36px">${target}</span></div>
        <div class="blocks-area" id="bArea"></div>
        <div style="text-align:center;font-size:18px;font-weight:800;margin-bottom:8px">Built so far: <span id="bSum" style="color:#EA580C">0</span></div>
        <div class="a-feedback" id="aFb"></div>
        <button class="a-next show" id="aNext" type="button">Done building ✓</button>
      </div>
    `;
    const area = container.querySelector('#bArea');
    const sumEl = container.querySelector('#bSum');
    function refresh(){
      const total = counts.ones * 1 + counts.tens * 10 + counts.hundreds * 100 + counts.thousands * 1000;
      sumEl.textContent = total;
    }
    places.forEach(p => {
      const row = document.createElement('div');
      row.style.display = 'flex'; row.style.alignItems = 'center'; row.style.gap = '8px'; row.style.flexWrap = 'wrap'; row.style.justifyContent = 'center';
      row.innerHTML = `<div class="block-row-label" style="min-width:80px">${p}</div>`;
      const tray = document.createElement('div');
      tray.className = 'blocks-row'; tray.style.minWidth = '180px';
      row.appendChild(tray);
      const addBtn = document.createElement('button');
      addBtn.className = 'opt-btn'; addBtn.style.padding = '6px 12px'; addBtn.style.fontSize = '14px'; addBtn.style.minWidth = '48px';
      addBtn.textContent = '＋';
      addBtn.onclick = () => {
        if (counts[p] >= 12) return; // soft cap
        counts[p]++;
        const blk = document.createElement('div');
        blk.className = 'block ' + (p === 'tens' ? 'tens' : p === 'hundreds' || p === 'thousands' ? 'hundreds' : '');
        blk.textContent = placeValMap[p];
        blk.title = 'Tap to remove';
        blk.onclick = () => { blk.remove(); counts[p]--; refresh(); };
        tray.appendChild(blk);
        refresh();
      };
      row.appendChild(addBtn);
      area.appendChild(row);
    });

    const next = container.querySelector('#aNext');
    next.onclick = () => {
      const built = counts.ones * 1 + counts.tens * 10 + counts.hundreds * 100 + counts.thousands * 1000;
      const fb = container.querySelector('#aFb');
      const isOk = built === target;
      if (isOk){ fb.className='a-feedback ok'; fb.textContent='✅ Built it!'; }
      else { fb.className='a-feedback no'; fb.textContent=`❌ You built ${built}, target was ${target}.`; }
      next.textContent = idx + 1 < total ? 'Next build →' : 'See result →';
      next.onclick = () => onAnswer(isOk);
    };
  }

  function balanceRound(container, idx, total, grade, onAnswer){
    let a, sum;
    if (grade <= 2){ sum = rand(8, 18); a = rand(1, sum-1); }
    else if (grade <= 4){ sum = rand(30, 80); a = rand(5, sum-5); }
    else { sum = rand(80, 250); a = rand(20, sum-20); }
    const correct = sum - a;
    // Distractors near the correct answer
    const choicesSet = new Set([correct]);
    while (choicesSet.size < 4){ const d = correct + (rand(0,1) ? 1 : -1) * rand(1, Math.max(2, Math.floor(correct/4))); if (d > 0 && d !== correct) choicesSet.add(d); }
    const choices = [...choicesSet];
    for (let i = choices.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [choices[i], choices[j]] = [choices[j], choices[i]]; }
    container.innerHTML = `
      <div class="a-card">
        <div class="a-progress">${cells(idx, total)}</div>
        <div style="text-align:center;font-size:14px;font-weight:700;opacity:0.7;margin-bottom:6px">⚖️ Balance the scale</div>
        <div class="a-q" style="font-size:32px">${a} + ? = ${sum}</div>
        <div class="a-options" id="bChoices"></div>
        <div class="a-feedback" id="aFb"></div>
      </div>
    `;
    const cont = container.querySelector('#bChoices');
    choices.forEach(c => {
      const b = document.createElement('button');
      b.className = 'opt-btn'; b.textContent = c;
      b.onclick = () => {
        const isOk = c === correct;
        const fb = container.querySelector('#aFb');
        cont.querySelectorAll('button').forEach(x => { x.disabled = true; if (parseInt(x.textContent,10) === correct) x.classList.add('correct'); });
        if (!isOk) b.classList.add('wrong');
        if (isOk){ fb.className='a-feedback ok'; fb.textContent='✅ Balanced!'; }
        else { fb.className='a-feedback no'; fb.textContent=`❌ Answer was ${correct}.`; }
        setTimeout(() => onAnswer(isOk), 800);
      };
      cont.appendChild(b);
    });
  }

  window.MM_ACT_BUILDERS_WORKSHOP = function(opts){
    const { grade, container, onComplete } = opts;
    const rounds = [];
    for (let i = 0; i < 3; i++) rounds.push({ kind:'block' });
    for (let i = 0; i < 2; i++) rounds.push({ kind:'balance' });
    let idx = 0, score = 0;
    const total = rounds.length;
    function run(){
      if (idx >= total){ onComplete({ score, total }); return; }
      const r = rounds[idx];
      const handler = (ok) => { if (ok) score++; idx++; run(); };
      if (r.kind === 'block') blockRound(container, idx, total, grade, handler);
      else balanceRound(container, idx, total, grade, handler);
    }
    run();
  };
})();
