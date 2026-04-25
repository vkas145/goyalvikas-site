/* Wednesday — Rainbow Lab 🌈
   Color-by-Answer: a 6×6 grid divided into "color regions". Each
   region has a math question. Solve → that region paints itself. After
   all regions colored, the picture is revealed. */
(function(){
  'use strict';

  // Predefined "pictures" as a 6×6 grid where each cell holds a region id
  // (1-N), and each region has a target color. With grid+colors, you reveal
  // simple shapes (heart, sun, fish, butterfly, star). For v1 we ship one
  // shape and rotate via week-seed.
  const PICTURES = [
    { name:'Heart', revealEmoji:'❤️', regions: [
      // Each region's id, the cells it occupies, and target color.
      { id:1, color:'#EF4444', cells:[[0,1],[0,2],[0,3],[0,4]] },
      { id:2, color:'#EF4444', cells:[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]] },
      { id:3, color:'#EF4444', cells:[[2,0],[2,1],[2,2],[2,3],[2,4],[2,5]] },
      { id:4, color:'#EF4444', cells:[[3,1],[3,2],[3,3],[3,4]] },
      { id:5, color:'#EF4444', cells:[[4,2],[4,3]] }
    ]},
    { name:'Sun', revealEmoji:'☀️', regions: [
      { id:1, color:'#FACC15', cells:[[0,0],[0,5],[1,1],[1,4],[2,2],[2,3]] },
      { id:2, color:'#F59E0B', cells:[[2,1],[2,4],[3,2],[3,3]] },
      { id:3, color:'#FB923C', cells:[[3,1],[3,4],[4,1],[4,2],[4,3],[4,4]] },
      { id:4, color:'#FACC15', cells:[[5,0],[5,5],[1,0],[1,5]] },
      { id:5, color:'#F59E0B', cells:[[0,1],[0,4],[5,1],[5,4]] }
    ]},
    { name:'Fish', revealEmoji:'🐠', regions: [
      { id:1, color:'#3B82F6', cells:[[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[2,4]] },
      { id:2, color:'#0EA5E9', cells:[[3,1],[3,2],[3,3],[3,4],[4,2],[4,3]] },
      { id:3, color:'#06B6D4', cells:[[2,5],[3,5],[1,5]] },
      { id:4, color:'#FBBF24', cells:[[2,0],[3,0],[4,0]] },
      { id:5, color:'#FFFFFF', cells:[[1,4],[2,4]] }
    ]}
  ];

  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

  function genQ(grade){
    // Grade-scaled arithmetic q with a single number answer.
    let a, b, op;
    if (grade <= 2){ a = rand(1, 30); b = rand(1, 20); op = Math.random() < 0.5 ? '+' : '−'; if (op === '−' && b > a) [a,b] = [b,a]; }
    else if (grade <= 4){ a = rand(20, 200); b = rand(10, 100); op = Math.random() < 0.5 ? '+' : '−'; if (op === '−' && b > a) [a,b] = [b,a]; }
    else { a = rand(50, 500); b = rand(20, 200); op = Math.random() < 0.5 ? '+' : '−'; if (op === '−' && b > a) [a,b] = [b,a]; }
    const ans = op === '+' ? a + b : a - b;
    return { q: `${a} ${op} ${b}`, ans };
  }

  function cells(activeIdx, total){
    let s = '';
    for (let i = 0; i < total; i++) s += `<div class="a-progress-cell ${i < activeIdx ? 'done' : i === activeIdx ? 'active' : ''}"></div>`;
    return s;
  }

  window.MM_ACT_RAINBOW_LAB = function(opts){
    const { grade, container, onComplete } = opts;
    const seed = window.MM_DAILY ? window.MM_DAILY.weekSeed() : 1;
    const pic = PICTURES[seed % PICTURES.length];

    let idx = 0, score = 0;
    const total = pic.regions.length;

    // Render persistent grid + question card; only swap the q on each round.
    container.innerHTML = `
      <div class="a-card">
        <div class="a-progress" id="aProg">${cells(0, total)}</div>
        <div style="text-align:center;margin-bottom:6px;font-size:14px;font-weight:700;opacity:0.7">🧪 The scientist says…</div>
        <div class="paint-key" id="paintKey"></div>
        <div class="paint-grid" id="paintGrid"></div>
        <div class="a-q" id="aQ">…</div>
        <div class="a-input-row">
          <input class="a-input" id="aInput" inputmode="numeric" pattern="[0-9-]*" autocomplete="off" />
          <button class="a-submit" id="aSubmit" type="button">Paint!</button>
        </div>
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
    // Key
    const key = container.querySelector('#paintKey');
    pic.regions.forEach(r => {
      const tag = document.createElement('span');
      tag.innerHTML = `<span class="pk-dot" style="background:${r.color}"></span>region ${r.id}`;
      key.appendChild(tag);
    });

    function paintRegion(region){
      region.cells.forEach(([r,c]) => {
        const el = cellMap[`${r},${c}`];
        if (el) el.style.background = region.color;
      });
    }

    function next(){
      if (idx >= total){
        // Final reveal
        container.innerHTML = `
          <div class="a-card" style="text-align:center">
            <div style="font-size:14px;font-weight:700;opacity:0.7;margin-bottom:8px">🧪 The scientist beams…</div>
            <div style="font-size:64px;line-height:1;margin:14px 0">${pic.revealEmoji}</div>
            <div style="font-size:24px;font-weight:900">It's a ${pic.name}!</div>
            <div style="opacity:0.8;margin-top:6px">You painted ${score}/${total} regions correctly.</div>
          </div>
        `;
        setTimeout(() => onComplete({ score, total }), 1200);
        return;
      }
      const region = pic.regions[idx];
      const q = genQ(grade);
      container.querySelector('#aProg').innerHTML = cells(idx, total);
      container.querySelector('#aQ').innerHTML = `<span style="display:inline-block;background:${region.color};color:#FFF;padding:4px 10px;border-radius:8px;margin-right:8px;border:2px solid #2B1B4A">Region ${region.id}</span> ${q.q} = ?`;
      const inp = container.querySelector('#aInput');
      const sub = container.querySelector('#aSubmit');
      const fb = container.querySelector('#aFb');
      inp.value = ''; fb.className = 'a-feedback'; fb.textContent = '';
      inp.focus();
      function submit(){
        const v = parseInt(inp.value, 10);
        const isOk = !isNaN(v) && v === q.ans;
        if (isOk){
          fb.className = 'a-feedback ok'; fb.textContent = `✅ Painted! Region ${region.id} is now ${region.color === '#FFFFFF' ? 'white' : 'colored'}.`;
          paintRegion(region); score++;
        } else {
          fb.className = 'a-feedback no'; fb.textContent = `❌ Answer was ${q.ans}.`;
          // Still paint the region so the picture completes; just don't score it.
          paintRegion(region);
        }
        sub.disabled = true; inp.disabled = true;
        setTimeout(() => { idx++; next(); }, 1100);
      }
      sub.onclick = submit;
      inp.onkeydown = (e) => { if (e.key === 'Enter') submit(); };
    }
    next();
  };
})();
