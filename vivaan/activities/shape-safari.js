/* Tuesday — Shape Safari 🔷
   Spotter scene: a busy emoji "jungle" of mixed shapes; kid taps all
   instances of the requested shape. 5 rounds; each scene grows in
   complexity with grade. Closer to spec's "Shape Spotter". */
(function(){
  'use strict';

  const SHAPES = [
    { e:'🔴', name:'circle' },
    { e:'🔵', name:'circle' },
    { e:'⚫', name:'circle' },
    { e:'🟠', name:'circle' },
    { e:'🟢', name:'circle' },
    { e:'🔺', name:'triangle' },
    { e:'🔻', name:'triangle' },
    { e:'⬛', name:'square' },
    { e:'🟦', name:'square' },
    { e:'🟧', name:'square' },
    { e:'🟪', name:'square' },
    { e:'🔶', name:'diamond' },
    { e:'🔷', name:'diamond' },
    { e:'⭐', name:'star' },
    { e:'❤️', name:'heart' },
    { e:'🟨', name:'square' }
  ];

  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

  function makeRound(grade, idx){
    const total = grade <= 2 ? 12 : grade <= 5 ? 16 : 20;
    // Pick a target shape that appears at least 2 times.
    const targetName = ['circle','triangle','square','diamond'][idx % 4];
    const targetShapes = SHAPES.filter(s => s.name === targetName);
    const otherShapes = SHAPES.filter(s => s.name !== targetName);
    const targetCount = rand(3, Math.max(3, Math.floor(total / 2.5)));
    const items = [];
    for (let i = 0; i < targetCount; i++){
      items.push({...targetShapes[rand(0, targetShapes.length-1)], _target:true });
    }
    while (items.length < total){
      items.push({...otherShapes[rand(0, otherShapes.length-1)], _target:false });
    }
    // Shuffle
    for (let i = items.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return { idx, targetName, items };
  }

  function cells(activeIdx, total){
    let s = '';
    for (let i = 0; i < total; i++){
      s += `<div class="a-progress-cell ${i < activeIdx ? 'done' : i === activeIdx ? 'active' : ''}"></div>`;
    }
    return s;
  }

  function renderRound(container, round, total, onAnswer){
    const tagged = round.items.map((it, i) => ({...it, i}));
    const correctIdx = new Set(tagged.filter(t => t._target).map(t => t.i));
    const picked = new Set();
    container.innerHTML = `
      <div class="a-card">
        <div class="a-progress">${cells(round.idx, total)}</div>
        <div style="text-align:center;margin-bottom:6px;font-size:14px;font-weight:700;opacity:0.7">🦁 The explorer says…</div>
        <div class="a-q">Tap every <span style="color:#059669">${round.targetName}</span> in the jungle</div>
        <div id="ssGrid" style="display:grid;grid-template-columns:repeat(6,1fr);gap:8px;max-width:420px;margin:0 auto"></div>
        <div class="a-feedback" id="aFb"></div>
        <button class="a-next" id="aNext" type="button">I got them all ✓</button>
      </div>
    `;
    const grid = container.querySelector('#ssGrid');
    tagged.forEach(t => {
      const b = document.createElement('button');
      b.className = 'opt-btn';
      b.style.padding = '14px 4px'; b.style.fontSize = '28px'; b.style.minHeight = '54px';
      b.textContent = t.e;
      b.dataset.i = t.i;
      b.addEventListener('click', () => {
        const i = parseInt(b.dataset.i, 10);
        if (picked.has(i)){ picked.delete(i); b.style.background = ''; b.style.transform = ''; }
        else { picked.add(i); b.style.background = '#86EFAC'; b.style.transform = 'scale(0.95)'; }
      });
      grid.appendChild(b);
    });
    const next = container.querySelector('#aNext');
    next.classList.add('show');
    next.addEventListener('click', () => {
      const isOk = picked.size === correctIdx.size && [...picked].every(i => correctIdx.has(i));
      const fb = container.querySelector('#aFb');
      // Reveal correct + wrong
      grid.querySelectorAll('button').forEach(b => {
        const i = parseInt(b.dataset.i, 10);
        b.disabled = true;
        if (correctIdx.has(i)) b.style.background = picked.has(i) ? '#22C55E' : '#FEF3C7';
        else if (picked.has(i)) b.style.background = '#FCA5A5';
      });
      if (isOk){ fb.className='a-feedback ok'; fb.textContent='✅ Eagle eyes!'; }
      else fb.className='a-feedback no', fb.textContent = `❌ Found ${[...picked].filter(i => correctIdx.has(i)).length}/${correctIdx.size}. Yellow = missed.`;
      next.textContent = round.idx + 1 < total ? 'Next jungle →' : 'See result →';
      next.onclick = () => onAnswer(isOk);
    });
  }

  window.MM_ACT_SHAPE_SAFARI = function(opts){
    const { grade, container, onComplete } = opts;
    const rounds = [];
    for (let i = 0; i < 5; i++) rounds.push(makeRound(grade, i));
    let idx = 0, score = 0;
    const total = rounds.length;
    function run(){
      if (idx >= total){ onComplete({ score, total }); return; }
      const r = { ...rounds[idx], idx };
      renderRound(container, r, total, (ok) => {
        if (ok) score++;
        idx++;
        run();
      });
    }
    run();
  };
})();
