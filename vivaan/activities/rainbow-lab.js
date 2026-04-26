/* Wednesday — Rainbow Lab 🌈  (v2: dense + grade-band aware)
   ─────────────────────────────────────────────────────────────
   Universal mechanic: solve a question, paint a region. After all
   regions are painted, the picture is revealed (heart, sun, fish).
   G1-2 uses simple arithmetic; G3+ pulls grade-correct questions
   from QUIZ_DATA so the maths actually matches the grade.
   12 regions = 12 questions = ~12-15 min. */
(function(){
  'use strict';

  // 12-region pictures (denser canvas).
  const PICTURES = [
    { name:'Heart', revealEmoji:'❤️', regions: [
      { id:1,  color:'#EF4444', cells:[[0,1],[0,2]] },
      { id:2,  color:'#EF4444', cells:[[0,3],[0,4]] },
      { id:3,  color:'#EF4444', cells:[[1,0],[1,1]] },
      { id:4,  color:'#EF4444', cells:[[1,2],[1,3]] },
      { id:5,  color:'#EF4444', cells:[[1,4],[1,5]] },
      { id:6,  color:'#EF4444', cells:[[2,0],[2,1]] },
      { id:7,  color:'#EF4444', cells:[[2,2],[2,3]] },
      { id:8,  color:'#EF4444', cells:[[2,4],[2,5]] },
      { id:9,  color:'#EF4444', cells:[[3,1],[3,2]] },
      { id:10, color:'#EF4444', cells:[[3,3],[3,4]] },
      { id:11, color:'#EF4444', cells:[[4,2]] },
      { id:12, color:'#EF4444', cells:[[4,3]] }
    ]},
    { name:'Sun', revealEmoji:'☀️', regions: [
      { id:1,  color:'#FACC15', cells:[[0,0]] },
      { id:2,  color:'#FACC15', cells:[[0,5]] },
      { id:3,  color:'#FACC15', cells:[[1,0],[1,5]] },
      { id:4,  color:'#FACC15', cells:[[5,0],[5,5]] },
      { id:5,  color:'#F59E0B', cells:[[1,1]] },
      { id:6,  color:'#F59E0B', cells:[[1,4]] },
      { id:7,  color:'#F59E0B', cells:[[2,1],[2,4]] },
      { id:8,  color:'#FB923C', cells:[[2,2],[2,3]] },
      { id:9,  color:'#FB923C', cells:[[3,2],[3,3]] },
      { id:10, color:'#FB923C', cells:[[3,1],[3,4]] },
      { id:11, color:'#FACC15', cells:[[4,1],[4,2]] },
      { id:12, color:'#FACC15', cells:[[4,3],[4,4]] }
    ]},
    { name:'Fish', revealEmoji:'🐠', regions: [
      { id:1,  color:'#3B82F6', cells:[[1,1]] },
      { id:2,  color:'#3B82F6', cells:[[1,2]] },
      { id:3,  color:'#3B82F6', cells:[[1,3]] },
      { id:4,  color:'#3B82F6', cells:[[2,1],[2,2]] },
      { id:5,  color:'#3B82F6', cells:[[2,3]] },
      { id:6,  color:'#3B82F6', cells:[[2,4]] },
      { id:7,  color:'#0EA5E9', cells:[[3,1],[3,2]] },
      { id:8,  color:'#0EA5E9', cells:[[3,3],[3,4]] },
      { id:9,  color:'#0EA5E9', cells:[[4,2],[4,3]] },
      { id:10, color:'#FBBF24', cells:[[2,0],[3,0]] },
      { id:11, color:'#06B6D4', cells:[[1,4],[1,5]] },
      { id:12, color:'#06B6D4', cells:[[2,5],[3,5]] }
    ]}
  ];

  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

  function genArith(grade){
    let a, b, op;
    if (grade <= 2){ a = rand(1, 30); b = rand(1, 20); op = Math.random()<0.5?'+':'−'; if (op==='−'&&b>a) [a,b]=[b,a]; }
    else { a = rand(20, 200); b = rand(10, 100); op = Math.random()<0.5?'+':'−'; if (op==='−'&&b>a) [a,b]=[b,a]; }
    const ans = op === '+' ? a + b : a - b;
    return { q: `${a} ${op} ${b}`, ans };
  }

  window.MM_ACT_RAINBOW_LAB = function(opts){
    const { grade, container, onComplete } = opts;
    const D = window.MM_DAILY;
    const seed = D ? D.weekSeed() : 1;
    const pic = PICTURES[seed % PICTURES.length];

    let idx = 0, score = 0;
    const total = pic.regions.length;

    // Pre-fetch grade-appropriate Qs from QUIZ_DATA (mcq + enterval) for grades 3+
    let dataQs = [];
    if (D && grade > 2) dataQs = D.getQuestionsForGrade(grade, total, { types: ['mcq','enterval'] });
    // Pad with arithmetic if data short
    while (dataQs.length < total) dataQs.push(null); // null = generate arith

    container.innerHTML = `
      <div class="a-card">
        <div class="qb-meta">
          <span class="qb-badge">🧪 Paint the picture</span>
          <span class="qb-progress" id="rlProg">1 / ${total}</span>
        </div>
        <div class="paint-grid" id="paintGrid"></div>
        <div class="a-q" id="aQ">…</div>
        <div id="qbBody"></div>
        <div class="a-feedback" id="aFb" style="margin-top:10px"></div>
      </div>
    `;
    const grid = container.querySelector('#paintGrid');
    const cellMap = {};
    for (let r = 0; r < 6; r++){
      for (let c = 0; c < 6; c++){
        const el = document.createElement('div');
        el.className = 'paint-cell';
        cellMap[`${r},${c}`] = el;
        grid.appendChild(el);
      }
    }
    function paintRegion(region){
      region.cells.forEach(([r,c]) => {
        const el = cellMap[`${r},${c}`];
        if (el) el.style.background = region.color;
      });
    }

    function next(){
      if (idx >= total){
        // Picture revealed → bonus round of 8 questions for extra fun (= 20 total)
        container.innerHTML = `
          <div class="a-card" style="text-align:center">
            <div class="qb-badge">🧪 Picture revealed!</div>
            <div style="font-size:64px;line-height:1;margin:14px 0">${pic.revealEmoji}</div>
            <div style="font-size:24px;font-weight:900">It's a ${pic.name}!</div>
            <div style="opacity:0.8;margin-top:8px">${score}/${total} regions painted. 8 bonus questions next…</div>
          </div>
        `;
        setTimeout(() => {
          const bonusQs = D.getQuestionsForGrade(grade, 8, { types: ['mcq','enterval','fillin','tf'] });
          if (window.MM_QBATCH && bonusQs.length){
            window.MM_QBATCH.runBatch(container, bonusQs, { themeBadge:'🧪 Bonus round' })
              .then(r => onComplete({ score: score + r.score, total: total + r.total }));
          } else {
            onComplete({ score, total });
          }
        }, 1500);
        return;
      }
      const region = pic.regions[idx];
      const dq = dataQs[idx];
      const arith = !dq ? genArith(grade) : null;
      container.querySelector('#rlProg').textContent = `${idx + 1} / ${total}`;
      const qEl = container.querySelector('#aQ');
      const body = container.querySelector('#qbBody');
      const fb = container.querySelector('#aFb');
      const colorTag = `<span style="display:inline-block;background:${region.color};color:#FFF;padding:3px 9px;border-radius:8px;margin-right:8px;border:2px solid #2B1B4A;font-size:13px">Region ${region.id}</span>`;

      if (arith){
        qEl.innerHTML = `${colorTag}${arith.q} = ?`;
        body.innerHTML = `<div class="a-input-row"><input class="a-input" id="rlInp" inputmode="numeric" pattern="[0-9-]*" autocomplete="off" /><button class="a-submit" id="rlSub" type="button">Paint!</button></div>`;
        const inp = body.querySelector('#rlInp'); const sub = body.querySelector('#rlSub');
        inp.focus();
        const submit = () => {
          const v = parseFloat(inp.value);
          const ok = !isNaN(v) && v === arith.ans;
          if (ok){ fb.className='a-feedback ok'; fb.textContent=`✅ Painted region ${region.id}!`; paintRegion(region); score++; }
          else { fb.className='a-feedback no'; fb.textContent=`❌ Answer was ${arith.ans}.`; paintRegion(region); }
          sub.disabled = true; inp.disabled = true;
          setTimeout(() => { idx++; next(); }, 1100);
        };
        sub.onclick = submit;
        inp.onkeydown = (e) => { if (e.key === 'Enter') submit(); };
      } else {
        // Use a QUIZ_DATA question. We'll show it via mini-MCQ or numeric.
        qEl.innerHTML = `${colorTag}${dq.q}`;
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
              if (ok){ fb.className='a-feedback ok'; fb.textContent=`✅ Painted region ${region.id}!`; paintRegion(region); score++; }
              else { fb.className='a-feedback no'; fb.textContent=`❌ Answer: ${correct}`; paintRegion(region); }
              setTimeout(() => { idx++; next(); }, 1100);
            };
          });
        } else if (dq.type === 'enterval'){
          body.innerHTML = `<div class="a-input-row"><input class="a-input" id="rlInp" inputmode="numeric" /><button class="a-submit" id="rlSub" type="button">Paint!</button></div>`;
          const inp = body.querySelector('#rlInp'); const sub = body.querySelector('#rlSub');
          inp.focus();
          const submit = () => {
            const v = parseFloat(inp.value);
            const ok = !isNaN(v) && v === dq.a;
            if (ok){ fb.className='a-feedback ok'; fb.textContent=`✅ Painted region ${region.id}!`; paintRegion(region); score++; }
            else { fb.className='a-feedback no'; fb.textContent=`❌ Answer was ${dq.a}.`; paintRegion(region); }
            sub.disabled = true; inp.disabled = true;
            setTimeout(() => { idx++; next(); }, 1100);
          };
          sub.onclick = submit; inp.onkeydown = (e) => { if (e.key === 'Enter') submit(); };
        } else {
          // Fallback — auto-advance
          paintRegion(region); score++;
          setTimeout(() => { idx++; next(); }, 600);
        }
      }
    }
    next();
  };
})();
