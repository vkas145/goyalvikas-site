/* Monday — Number Kingdom 👑
   Place Value Palace: King shows a number, kid taps the right
   ones / tens / hundreds blocks to build it. Mixes in number-ordering
   "biggest/smallest" rounds for variety. 6 rounds total. */
(function(){
  'use strict';

  function pickNumber(grade){
    // Number range scales with grade band.
    if (grade <= 2) return rand(10, 99);
    if (grade <= 4) return rand(100, 999);
    return rand(1000, 9999);
  }
  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }
  function digits(n){
    const s = String(n);
    return s.split('').map(c => parseInt(c, 10));
  }

  function renderRound(container, round, total, grade, onAnswer){
    const t = round.target;
    const ds = digits(t);
    const places = ['ones','tens','hundreds','thousands'].slice(0, ds.length).reverse();
    const html = `
      <div class="a-card">
        <div class="a-progress">${cells(round.idx, total)}</div>
        <div style="text-align:center;margin-bottom:6px;font-size:14px;font-weight:700;opacity:0.7">👑 The King says…</div>
        <div class="a-q">Build the number <span style="font-size:34px">${t}</span></div>
        <div style="display:flex;flex-direction:column;gap:10px;align-items:center">
          ${places.map((p, i) => {
            const correctCount = ds[i];
            return `<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center">
              <div class="block-row-label" style="min-width:80px">${p}</div>
              <div class="blocks-row" data-place="${p}" data-correct="${correctCount}">
                <span style="opacity:0.5;font-size:12px;align-self:center">tap to add</span>
              </div>
              <button class="opt-btn" data-add="${p}" style="padding:6px 12px;font-size:14px;min-width:48px">＋</button>
            </div>`;
          }).join('')}
        </div>
        <div class="a-feedback" id="aFb"></div>
        <button class="a-next" id="aNext" type="button">Check answer ✓</button>
      </div>
    `;
    container.innerHTML = html;
    const next = container.querySelector('#aNext');
    next.classList.add('show');
    next.textContent = 'Check answer ✓';

    container.querySelectorAll('button[data-add]').forEach(btn => {
      btn.addEventListener('click', () => {
        const place = btn.dataset.add;
        const row = container.querySelector(`.blocks-row[data-place="${place}"]`);
        if (!row) return;
        // Strip the placeholder hint on first add
        const hint = row.querySelector('span'); if (hint) hint.remove();
        const block = document.createElement('div');
        block.className = 'block ' + (place === 'tens' ? 'tens' : place === 'hundreds' ? 'hundreds' : place === 'thousands' ? 'hundreds' : '');
        block.textContent = place === 'ones' ? '1' : place === 'tens' ? '10' : place === 'hundreds' ? '100' : '1000';
        block.title = 'Tap to remove';
        block.addEventListener('click', () => block.remove());
        row.appendChild(block);
      });
    });

    next.addEventListener('click', () => {
      const isOk = places.every((p, i) => {
        const row = container.querySelector(`.blocks-row[data-place="${p}"]`);
        const have = row.querySelectorAll('.block').length;
        return have === ds[i];
      });
      const fb = container.querySelector('#aFb');
      if (isOk){
        fb.className = 'a-feedback ok'; fb.textContent = '✅ Royally done!';
        next.textContent = round.idx + 1 < total ? 'Next round →' : 'See result →';
        next.onclick = () => onAnswer(true);
      } else {
        fb.className = 'a-feedback no'; fb.textContent = '❌ Not quite — count the digits in ' + t;
        // Allow re-attempt; on second attempt mark as wrong but still advance.
        next.textContent = round.idx + 1 < total ? 'Show me & continue →' : 'Show me & finish →';
        next.onclick = () => onAnswer(false);
      }
    });
  }

  function renderOrderingRound(container, round, total, grade, onAnswer){
    const nums = round.nums;
    const wantAsc = round.wantAsc;
    let picked = [];
    container.innerHTML = `
      <div class="a-card">
        <div class="a-progress">${cells(round.idx, total)}</div>
        <div style="text-align:center;margin-bottom:6px;font-size:14px;font-weight:700;opacity:0.7">👑 Build the castle wall — tap numbers in order</div>
        <div class="a-q">${wantAsc ? 'Smallest to BIGGEST' : 'Biggest to SMALLEST'}</div>
        <div id="kPool" style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:10px"></div>
        <div id="kSeq" style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;min-height:40px;padding:6px;background:rgba(43,27,74,0.06);border-radius:10px"></div>
        <div class="a-feedback" id="aFb"></div>
        <button class="a-next" id="aNext" type="button">Check answer ✓</button>
      </div>
    `;
    const pool = container.querySelector('#kPool');
    const seq = container.querySelector('#kSeq');
    nums.forEach(n => {
      const b = document.createElement('button');
      b.className = 'opt-btn'; b.style.fontSize = '20px'; b.style.minWidth = '64px';
      b.textContent = n;
      b.addEventListener('click', () => {
        if (b.disabled) return;
        b.disabled = true; b.style.opacity = '0.4';
        picked.push(n);
        const chip = document.createElement('div');
        chip.className = 'block tens'; chip.style.fontSize='16px'; chip.textContent = n; seq.appendChild(chip);
      });
      pool.appendChild(b);
    });
    const next = container.querySelector('#aNext');
    next.classList.add('show');
    next.addEventListener('click', () => {
      const sorted = nums.slice().sort((a,b) => a - b);
      const want = wantAsc ? sorted : sorted.slice().reverse();
      const isOk = picked.length === nums.length && picked.every((v,i) => v === want[i]);
      const fb = container.querySelector('#aFb');
      if (isOk){ fb.className='a-feedback ok'; fb.textContent='✅ Castle wall stands tall!'; }
      else { fb.className='a-feedback no'; fb.textContent='❌ Order should be: ' + want.join(' → '); }
      next.textContent = round.idx + 1 < total ? 'Next round →' : 'See result →';
      next.onclick = () => onAnswer(isOk);
    });
  }

  function cells(activeIdx, total){
    let s = '';
    for (let i = 0; i < total; i++){
      s += `<div class="a-progress-cell ${i < activeIdx ? 'done' : i === activeIdx ? 'active' : ''}"></div>`;
    }
    return s;
  }

  window.MM_ACT_NUMBER_KINGDOM = function(opts){
    const { grade, container, onComplete } = opts;
    // Build 6 rounds: 4 place-value + 2 ordering.
    const rounds = [];
    for (let i = 0; i < 4; i++) rounds.push({ kind:'pv', target: pickNumber(grade) });
    for (let i = 0; i < 2; i++){
      const span = grade <= 2 ? 50 : grade <= 4 ? 200 : 2000;
      const base = pickNumber(grade);
      const nums = [base, base + Math.floor(Math.random()*span)+5, base - Math.floor(Math.random()*span)-5, base + Math.floor(Math.random()*span)+1].map(n => Math.max(1, n));
      // dedupe
      const uniq = Array.from(new Set(nums));
      while (uniq.length < 4) uniq.push(uniq[uniq.length-1] + 1);
      rounds.push({ kind:'order', nums: uniq.slice(0,4), wantAsc: i === 0 });
    }
    let idx = 0, score = 0;
    const total = rounds.length;
    function run(){
      if (idx >= total){ onComplete({ score, total }); return; }
      const r = { ...rounds[idx], idx };
      const handler = (ok) => {
        if (ok) score++;
        idx++;
        run();
      };
      if (r.kind === 'pv') renderRound(container, r, total, grade, handler);
      else renderOrderingRound(container, r, total, grade, handler);
    }
    run();
  };
})();
