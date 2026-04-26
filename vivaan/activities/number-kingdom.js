/* Monday — Number Kingdom 👑  (v2: dense + grade-band aware)
   ─────────────────────────────────────────────────────────────
   G1-2: 4 place-value/ordering rounds + 8 grade-2 questions = 12 total
   G3-10: 12 grade-correct questions from QUIZ_DATA, themed as the
          King's trials — the place-value blocks game makes no sense
          for an algebra-doing teenager. */
(function(){
  'use strict';

  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }
  function digits(n){ return String(n).split('').map(c => parseInt(c, 10)); }
  function pickNumber(grade){
    if (grade <= 2) return rand(10, 99);
    return rand(100, 999); // only used for G1-2 path
  }

  function cells(activeIdx, total){
    let s = '';
    for (let i = 0; i < total; i++) s += `<div class="a-progress-cell ${i < activeIdx ? 'done' : i === activeIdx ? 'active' : ''}"></div>`;
    return s;
  }

  // ─── G1-2: place-value blocks round ──────────────────────────
  function blocksRound(container, idx, total, grade, onAnswer){
    const t = pickNumber(grade);
    const ds = digits(t);
    const places = ['ones','tens','hundreds','thousands'].slice(0, ds.length).reverse();
    const placeVal = { ones:1, tens:10, hundreds:100, thousands:1000 };
    container.innerHTML = `
      <div class="a-card">
        <div class="qb-meta">
          <span class="qb-badge">👑 Build for the King</span>
          <span class="qb-progress">${idx + 1} / ${total}</span>
        </div>
        <div class="a-q">Build the number <span style="font-size:34px">${t}</span></div>
        <div style="display:flex;flex-direction:column;gap:10px;align-items:center">
          ${places.map(p => `<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center">
            <div class="block-row-label" style="min-width:80px">${p}</div>
            <div class="blocks-row" data-place="${p}"></div>
            <button class="opt-btn" data-add="${p}" style="padding:6px 12px;font-size:14px;min-width:48px">＋</button>
          </div>`).join('')}
        </div>
        <div class="a-feedback" id="aFb"></div>
        <button class="a-next show" id="aNext" type="button">Check ✓</button>
      </div>
    `;
    container.querySelectorAll('button[data-add]').forEach(btn => {
      btn.onclick = () => {
        const p = btn.dataset.add;
        const row = container.querySelector(`.blocks-row[data-place="${p}"]`);
        const blk = document.createElement('div');
        blk.className = 'block ' + (p === 'tens' ? 'tens' : (p === 'hundreds' || p === 'thousands' ? 'hundreds' : ''));
        blk.textContent = placeVal[p];
        blk.title = 'Tap to remove';
        blk.onclick = () => blk.remove();
        row.appendChild(blk);
      };
    });
    container.querySelector('#aNext').onclick = () => {
      const built = places.reduce((sum, p) => sum + container.querySelectorAll(`.blocks-row[data-place="${p}"] .block`).length * placeVal[p], 0);
      const fb = container.querySelector('#aFb');
      const ok = built === t;
      fb.className = ok ? 'a-feedback ok' : 'a-feedback no';
      fb.textContent = ok ? '✅ Royally done!' : `❌ You built ${built}; target was ${t}.`;
      container.querySelector('#aNext').textContent = idx + 1 < total ? 'Next round →' : 'See result →';
      container.querySelector('#aNext').onclick = () => onAnswer(ok);
    };
  }

  // ─── G1-2: ordering smallest→biggest round ───────────────────
  function orderingRound(container, idx, total, grade, onAnswer){
    const base = rand(10, 80);
    const span = 30;
    const nums = Array.from(new Set([base, base+rand(3,span), base-rand(3,span)>0?base-rand(3,span):base+1, base+rand(span+5,span+15)])).slice(0,4);
    while (nums.length < 4) nums.push(rand(20, 99));
    const target = nums.slice().sort((a,b) => a - b);
    let picked = [];
    container.innerHTML = `
      <div class="a-card">
        <div class="qb-meta">
          <span class="qb-badge">👑 Order the castle wall</span>
          <span class="qb-progress">${idx + 1} / ${total}</span>
        </div>
        <div class="a-q">Smallest to biggest</div>
        <div id="kPool" style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:10px"></div>
        <div id="kSeq" style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;min-height:40px;padding:6px;background:rgba(43,27,74,0.06);border-radius:10px"></div>
        <div class="a-feedback" id="aFb"></div>
        <button class="a-next show" id="aNext" type="button">Check ✓</button>
      </div>
    `;
    const pool = container.querySelector('#kPool');
    const seq = container.querySelector('#kSeq');
    nums.forEach(n => {
      const b = document.createElement('button');
      b.className = 'opt-btn'; b.style.fontSize = '20px'; b.style.minWidth = '64px';
      b.textContent = n;
      b.onclick = () => {
        if (b.disabled) return;
        b.disabled = true; b.style.opacity = '0.4';
        picked.push(n);
        const chip = document.createElement('div');
        chip.className = 'block tens'; chip.style.fontSize='16px'; chip.textContent = n;
        seq.appendChild(chip);
      };
      pool.appendChild(b);
    });
    container.querySelector('#aNext').onclick = () => {
      const ok = picked.length === target.length && picked.every((v,i) => v === target[i]);
      const fb = container.querySelector('#aFb');
      fb.className = ok ? 'a-feedback ok' : 'a-feedback no';
      fb.textContent = ok ? '✅ Wall stands tall!' : '❌ Order: ' + target.join(' → ');
      container.querySelector('#aNext').textContent = idx + 1 < total ? 'Next round →' : 'See result →';
      container.querySelector('#aNext').onclick = () => onAnswer(ok);
    };
  }

  window.MM_ACT_NUMBER_KINGDOM = async function(opts){
    const { grade, container, onComplete } = opts;
    const D = window.MM_DAILY;
    const QB = window.MM_QBATCH;

    if (grade <= 2){
      // 5 mechanic rounds + 15 question batch = 20 total
      const mechanicTotal = 20;
      let idx = 0, score = 0;
      function runMechanic(){
        if (idx >= 5){
          const qs = D.getQuestionsForGrade(grade, 15);
          QB.runBatch(container, qs, { themeBadge:'👑 Royal questions' })
            .then(r => onComplete({ score: score + r.score, total: mechanicTotal }));
          return;
        }
        const round = idx % 2 === 0 ? blocksRound : orderingRound;
        round(container, idx, mechanicTotal, grade, ok => { if (ok) score++; idx++; runMechanic(); });
      }
      runMechanic();
    } else {
      // G3-10: 20 grade-correct questions, themed
      const qs = D.getQuestionsForGrade(grade, 20);
      const result = await QB.runBatch(container, qs, {
        themeBadge: '👑 The King\'s trials'
      });
      onComplete(result);
    }
  };
})();
