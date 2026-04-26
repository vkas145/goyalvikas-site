/* Saturday — Builder's Workshop 🏗️  (v2: dense + grade-band aware)
   ─────────────────────────────────────────────────────────────────
   G1-2: 3 block-tower rounds + 2 balance-scale rounds + 7 question
         batch = 12 total
   G3-10: 12 grade-correct construction-themed questions from
          QUIZ_DATA (measurement, mensuration, area/volume bias). */
(function(){
  'use strict';

  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

  function genTarget(grade){
    if (grade <= 2) return rand(20, 99);
    return rand(100, 999);
  }
  function digits(n){ return String(n).split('').map(c => parseInt(c, 10)); }

  function blockRound(container, idx, total, grade, onAnswer){
    const target = genTarget(grade);
    const ds = digits(target);
    const places = ['ones','tens','hundreds','thousands'].slice(0, ds.length).reverse();
    const placeVal = { ones:1, tens:10, hundreds:100, thousands:1000 };
    let counts = { ones:0, tens:0, hundreds:0, thousands:0 };

    container.innerHTML = `
      <div class="a-card">
        <div class="qb-meta">
          <span class="qb-badge">🤖 The builder says…</span>
          <span class="qb-progress">${idx + 1} / ${total}</span>
        </div>
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
      const t = counts.ones + counts.tens*10 + counts.hundreds*100 + counts.thousands*1000;
      sumEl.textContent = t;
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
        if (counts[p] >= 12) return;
        counts[p]++;
        const blk = document.createElement('div');
        blk.className = 'block ' + (p === 'tens' ? 'tens' : (p === 'hundreds' || p === 'thousands' ? 'hundreds' : ''));
        blk.textContent = placeVal[p];
        blk.title = 'Tap to remove';
        blk.onclick = () => { blk.remove(); counts[p]--; refresh(); };
        tray.appendChild(blk);
        refresh();
      };
      row.appendChild(addBtn);
      area.appendChild(row);
    });
    container.querySelector('#aNext').onclick = () => {
      const built = counts.ones + counts.tens*10 + counts.hundreds*100 + counts.thousands*1000;
      const ok = built === target;
      const fb = container.querySelector('#aFb');
      fb.className = ok ? 'a-feedback ok' : 'a-feedback no';
      fb.textContent = ok ? '✅ Built it!' : `❌ You built ${built}, target was ${target}.`;
      container.querySelector('#aNext').textContent = idx + 1 < total ? 'Next build →' : 'On to questions →';
      container.querySelector('#aNext').onclick = () => onAnswer(ok);
    };
  }

  function balanceRound(container, idx, total, grade, onAnswer){
    let a, sum;
    if (grade <= 2){ sum = rand(10, 25); a = rand(2, sum-2); }
    else { sum = rand(40, 120); a = rand(10, sum-10); }
    const correct = sum - a;
    const choicesSet = new Set([correct]);
    while (choicesSet.size < 4){ const d = correct + (rand(0,1) ? 1 : -1) * rand(1, Math.max(2, Math.floor(correct/4))); if (d > 0 && d !== correct) choicesSet.add(d); }
    const choices = [...choicesSet];
    for (let i = choices.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [choices[i], choices[j]] = [choices[j], choices[i]]; }
    container.innerHTML = `
      <div class="a-card">
        <div class="qb-meta">
          <span class="qb-badge">⚖️ Balance the scale</span>
          <span class="qb-progress">${idx + 1} / ${total}</span>
        </div>
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
        const ok = c === correct;
        const fb = container.querySelector('#aFb');
        cont.querySelectorAll('button').forEach(x => { x.disabled = true; if (parseInt(x.textContent,10) === correct) x.classList.add('correct'); });
        if (!ok) b.classList.add('wrong');
        fb.className = ok ? 'a-feedback ok' : 'a-feedback no';
        fb.textContent = ok ? '✅ Balanced!' : `❌ Answer was ${correct}.`;
        setTimeout(() => onAnswer(ok), 800);
      };
      cont.appendChild(b);
    });
  }

  window.MM_ACT_BUILDERS_WORKSHOP = async function(opts){
    const { grade, container, onComplete } = opts;
    const D = window.MM_DAILY;
    const QB = window.MM_QBATCH;

    if (grade <= 2){
      // 4 block + 3 balance + 13 question batch = 20 total
      let idx = 0, score = 0;
      const sequence = ['block','block','block','block','balance','balance','balance'];
      function runMechanic(){
        if (idx >= sequence.length){
          const qs = D.getQuestionsForGrade(grade, 13);
          QB.runBatch(container, qs, { themeBadge:'🏗️ Build the answer' })
            .then(r => onComplete({ score: score + r.score, total: 20 }));
          return;
        }
        const handler = ok => { if (ok) score++; idx++; runMechanic(); };
        if (sequence[idx] === 'block') blockRound(container, idx, 20, grade, handler);
        else balanceRound(container, idx, 20, grade, handler);
      }
      runMechanic();
    } else {
      // G3-10: 20 grade-correct questions, themed as construction
      const qs = D.getQuestionsForGrade(grade, 20);
      const result = await QB.runBatch(container, qs, {
        themeBadge: '🏗️ Construction challenge'
      });
      onComplete(result);
    }
  };
})();
