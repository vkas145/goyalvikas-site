/* Tuesday — Shape Safari 🔷  (v2: dense + grade-band aware)
   ─────────────────────────────────────────────────────────────
   G1-2: 3 emoji-jungle spotter rounds + 9 question batch = 12 total
   G3-10: 12 grade-correct geometry/arith questions from QUIZ_DATA,
          themed as the explorer's safari trail. */
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
    { e:'⭐', name:'star' }
  ];

  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

  function spotterRound(container, idx, total, grade, onAnswer){
    const tot = grade <= 2 ? 12 : 16;
    const targetName = ['circle','triangle','square','diamond'][idx % 4];
    const target = SHAPES.filter(s => s.name === targetName);
    const other = SHAPES.filter(s => s.name !== targetName);
    const tCount = rand(3, Math.max(3, Math.floor(tot / 2.5)));
    const items = [];
    for (let i = 0; i < tCount; i++) items.push({...target[rand(0, target.length-1)], _t:true });
    while (items.length < tot) items.push({...other[rand(0, other.length-1)], _t:false });
    for (let i = items.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [items[i], items[j]] = [items[j], items[i]]; }
    const tagged = items.map((it, i) => ({...it, i}));
    const correctIdx = new Set(tagged.filter(t => t._t).map(t => t.i));
    const picked = new Set();

    container.innerHTML = `
      <div class="a-card">
        <div class="qb-meta">
          <span class="qb-badge">🦁 Tap every ${targetName}</span>
          <span class="qb-progress">${idx + 1} / ${total}</span>
        </div>
        <div id="ssGrid" style="display:grid;grid-template-columns:repeat(${grade<=2?6:8},1fr);gap:6px;max-width:480px;margin:0 auto"></div>
        <div class="a-feedback" id="aFb"></div>
        <button class="a-next show" id="aNext" type="button">I got them all ✓</button>
      </div>
    `;
    const grid = container.querySelector('#ssGrid');
    tagged.forEach(t => {
      const b = document.createElement('button');
      b.className = 'opt-btn';
      b.style.padding = '12px 4px'; b.style.fontSize = '24px'; b.style.minHeight = '46px';
      b.textContent = t.e; b.dataset.i = t.i;
      b.onclick = () => {
        const i = parseInt(b.dataset.i, 10);
        if (picked.has(i)){ picked.delete(i); b.style.background = ''; b.style.transform = ''; }
        else { picked.add(i); b.style.background = '#86EFAC'; b.style.transform = 'scale(0.95)'; }
      };
      grid.appendChild(b);
    });
    container.querySelector('#aNext').onclick = () => {
      const ok = picked.size === correctIdx.size && [...picked].every(i => correctIdx.has(i));
      grid.querySelectorAll('button').forEach(b => {
        const i = parseInt(b.dataset.i, 10);
        b.disabled = true;
        if (correctIdx.has(i)) b.style.background = picked.has(i) ? '#22C55E' : '#FEF3C7';
        else if (picked.has(i)) b.style.background = '#FCA5A5';
      });
      const fb = container.querySelector('#aFb');
      if (ok){ fb.className = 'a-feedback ok'; fb.textContent = '✅ Eagle eyes!'; }
      else { fb.className = 'a-feedback no'; fb.textContent = `Found ${[...picked].filter(i => correctIdx.has(i)).length}/${correctIdx.size}.`; }
      container.querySelector('#aNext').textContent = idx + 1 < total ? 'Next safari →' : 'On to questions →';
      container.querySelector('#aNext').onclick = () => onAnswer(ok);
    };
  }

  window.MM_ACT_SHAPE_SAFARI = async function(opts){
    const { grade, container, onComplete } = opts;
    const D = window.MM_DAILY;
    const QB = window.MM_QBATCH;

    if (grade <= 2){
      // 4 spotter rounds + 16 question batch = 20 total
      let idx = 0, score = 0;
      function runMechanic(){
        if (idx >= 4){
          const qs = D.getQuestionsForGrade(grade, 16);
          QB.runBatch(container, qs, { themeBadge:'🌴 Trail questions' })
            .then(r => onComplete({ score: score + r.score, total: 20 }));
          return;
        }
        spotterRound(container, idx, 20, grade, ok => { if (ok) score++; idx++; runMechanic(); });
      }
      runMechanic();
    } else {
      const qs = D.getQuestionsForGrade(grade, 20);
      const result = await QB.runBatch(container, qs, {
        themeBadge: '🦁 Safari challenge'
      });
      onComplete(result);
    }
  };
})();
