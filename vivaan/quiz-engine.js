/* ══════════════════════════════════════════════════════════════
   Vivaan Quiz Engine v2
   Requires globals: CHAPTER {key, title} and SETS {beginner, pro}
   Question types: mcq | tf | tapall | sort | fillin | abacus |
                   typeans | match | classify | enterval | fillintext
   ══════════════════════════════════════════════════════════════ */

// ─── Characters ───────────────────────────────────────────────
const CHARS=[
  {n:'Paddington',e:'🐻',y:['Paw-some!🐻🎉','Honey-sweet correct!🍯','Un-bear-ably smart!'],x:['Even bears slip!','Shake it off!🐾','Next one — paws crossed!']},
  {n:'Jerry',e:'🐭',y:['Squeaky genius!🐭','Jerry approves!🧀','Outsmarted everyone!'],x:['Try again!','Even I get chased!🐭','Cheese will come!🧀']},
  {n:'Tom',e:'🐱',y:['Purr-fect!🐱🎊','Tom impressed!✨','Meow-nificent!'],x:['Hiss! Close one!','Tom says: re-read!','Land on all fours!🐱']},
  {n:'Masha',e:'👧',y:['YES! 👧🎉','Smart as Masha!','Dance time!💃'],x:["Don't worry!👧",'Try again!','We all slip!']},
  {n:'Simba',e:'🦁',y:['ROAR! Correct!🦁','Pride Lands cheer!','Remember who you are!🌟'],x:['Hakuna Matata!','Even Simba learns!','Keep going, king!']},
  {n:'Super Vivaan',e:'🦸',y:['SUPERHERO!🦸⚡','Vivaan saves the day!','BLAZING brain!🌟'],x:['Even heroes have off days!','Power UP!🦸','You got this!⚡']}
];

// ─── Pair colours for match type ───────────────────────────────
const PAIR_COLORS=['#f7c948','#4fc3f7','#22d67a','#b39ddb'];

// ─── State ────────────────────────────────────────────────────
let level='beginner', setIdx=0, qIdx=0, score=0, answered=false;
let results=[], char=null, timerSecs=0, timerInt=null, timerStarted=false;
let sortSel=[], tapAllSel=new Set(), typeVal='';
let matchState={selectedLeft:null,connections:{},rightUsed:new Set()};
let classifyState={held:null,placements:{}};

// ─── Utilities ────────────────────────────────────────────────
const rand=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;};
const scoreKey=(l,si)=>`vivaan_${CHAPTER.key}_${l}_set${si}`;
const curQ=()=>SETS[level][setIdx][qIdx];
const totalQ=()=>SETS[level][setIdx].length;

// ─── Timer (starts on first interaction) ──────────────────────
function ensureTimer(){if(!timerStarted){timerStarted=true;timerInt=setInterval(()=>{timerSecs++;renderTimer();},1000);}}
function stopTimer(){clearInterval(timerInt);timerInt=null;}
function renderTimer(){const m=Math.floor(timerSecs/60),s=timerSecs%60;const el=document.getElementById('timerDisplay');if(el)el.textContent=`${m}:${s.toString().padStart(2,'0')}`;}

// ─── UI builders ──────────────────────────────────────────────
function initNav(){
  const el=document.getElementById('navTitle');
  if(el)el.textContent=CHAPTER.title;
}
function buildSetRow(){
  const el=document.getElementById('setRow');if(!el)return;el.innerHTML='';
  SETS[level].forEach((_,i)=>{
    const saved=localStorage.getItem(scoreKey(level,i));
    const btn=document.createElement('button');
    btn.className='set-pill'+(i===setIdx?' active':'')+(saved?' done':'');
    btn.textContent=`Set ${i+1}${saved?' ✓':''}`;
    btn.onclick=()=>{setIdx=i;buildSetRow();startSet();};
    el.appendChild(btn);
  });
}
function buildSidebar(){
  const el=document.getElementById('sidebar');if(!el)return;el.innerHTML='';
  for(let i=0;i<totalQ();i++){
    const b=document.createElement('div');
    b.className='qb'+(i===0?' cur':'');b.id=`qb${i}`;b.textContent=i+1;
    el.appendChild(b);
  }
}
function updateSidebar(){
  for(let i=0;i<totalQ();i++){
    const b=document.getElementById(`qb${i}`);if(!b)continue;
    b.className='qb';
    if(results[i]==='ok')b.classList.add('ok');
    else if(results[i]==='no')b.classList.add('no');
    else if(i===qIdx)b.classList.add('cur');
  }
}
function switchLevel(l){
  level=l;
  const bEl=document.getElementById('btnBeg'),pEl=document.getElementById('btnPro');
  if(bEl)bEl.classList.toggle('active',l==='beginner');
  if(pEl)pEl.classList.toggle('active',l==='pro');
  setIdx=0;buildSetRow();startSet();
}

// ─── Start / Render ───────────────────────────────────────────
function startSet(){
  qIdx=0;score=0;answered=false;
  results=new Array(totalQ()).fill(null);
  char=CHARS[Math.floor(Math.random()*CHARS.length)];
  timerSecs=0;timerStarted=false;stopTimer();renderTimer();
  const rs=document.getElementById('resultScreen');if(rs)rs.classList.remove('show');
  const qb=document.getElementById('quizBody');if(qb)qb.style.display='block';
  const tq=document.getElementById('totalQ');if(tq)tq.textContent=totalQ();
  const rtq=document.getElementById('resTotalQ');if(rtq)rtq.textContent=totalQ();
  const ls=document.getElementById('liveScore');if(ls)ls.textContent='0';
  const pb=document.getElementById('pbar');if(pb)pb.style.width='0%';
  buildSidebar();renderQ();setCharNeutral();
}

function renderQ(){
  const q=curQ();answered=false;
  const tt=document.getElementById('topicTag');if(tt)tt.textContent=q.topic;
  const qn=document.getElementById('qnum');if(qn)qn.textContent=`Question ${qIdx+1} of ${totalQ()}`;
  const qt=document.getElementById('qtext');if(qt)qt.textContent=q.q;
  const fb=document.getElementById('feedback');if(fb)fb.className='feedback';
  const nb=document.getElementById('nextBtn');if(nb)nb.className='next-btn';
  updateSidebar();
  const area=document.getElementById('interactionArea');if(!area)return;
  if(q.type==='mcq')        area.innerHTML=renderMCQ(q);
  else if(q.type==='tf')    area.innerHTML=renderTF();
  else if(q.type==='tapall')area.innerHTML=renderTapAll(q);
  else if(q.type==='sort')  area.innerHTML=renderSort(q);
  else if(q.type==='fillin')area.innerHTML=renderFillIn(q);
  else if(q.type==='abacus')area.innerHTML=renderAbacusQ(q);
  else if(q.type==='typeans')area.innerHTML=renderTypeAns();
  else if(q.type==='match') {area.innerHTML=renderMatch(q);}
  else if(q.type==='classify'){area.innerHTML=renderClassify(q);classifyInit(q);}
  else if(q.type==='enterval')area.innerHTML=renderEnterVal(q);
  else if(q.type==='fillintext')area.innerHTML=renderFillInText(q);
  setCharNeutral();
}

// ─── MCQ ──────────────────────────────────────────────────────
function renderMCQ(q){
  const correct=q.o[q.a];const sh=shuffle(q.o);const ci=sh.indexOf(correct);
  let h=`<div class="mcq-grid">`;
  sh.forEach((opt,i)=>{
    h+=`<button class="mcq-btn" onclick="answerMCQ(this,${i===ci},'${correct.replace(/'/g,"\\'").replace(/"/g,'&quot;')}',${ci})">${opt}</button>`;
  });
  return h+`</div>`;
}
function answerMCQ(btn,isOk,correctText,ci){
  if(answered)return;answered=true;ensureTimer();
  const btns=document.querySelectorAll('.mcq-btn');
  btns.forEach(b=>b.disabled=true);
  btns[ci].classList.add('correct');
  if(isOk)finishQ(true);
  else{btn.classList.add('wrong');finishQ(false,correctText);}
}

// ─── True / False ─────────────────────────────────────────────
function renderTF(){
  return`<div class="tf-wrap">
    <button class="tf-btn true-btn" onclick="answerTF(true,this)">✓<span class="tf-sub">TRUE</span></button>
    <button class="tf-btn false-btn" onclick="answerTF(false,this)">✗<span class="tf-sub">FALSE</span></button>
  </div>`;
}
function answerTF(val,btn){
  if(answered)return;answered=true;ensureTimer();
  const q=curQ();
  document.querySelectorAll('.tf-btn').forEach(b=>b.disabled=true);
  const isOk=val===q.answer;
  if(isOk){btn.classList.add('result-correct');finishQ(true);}
  else{
    btn.classList.add('result-wrong');
    document.querySelectorAll('.tf-btn').forEach(b=>{
      if((q.answer&&b.classList.contains('true-btn'))||(!q.answer&&b.classList.contains('false-btn')))b.classList.add('result-correct');
    });
    finishQ(false,`Correct: ${q.answer?'TRUE':'FALSE'}`);
  }
}

// ─── Tap All ──────────────────────────────────────────────────
function renderTapAll(q){
  tapAllSel=new Set();
  const sh=shuffle([...q.pool]);
  let h=`<div class="tapall-wrap">
    <div class="tapall-hint">Tap to select • Tap again to deselect</div>
    <div class="tapall-grid" id="tapGrid">`;
  sh.forEach(v=>{ h+=`<button class="ta-btn" data-val="${v}" onclick="toggleTA(this,${v})">${v}</button>`; });
  h+=`</div><button class="check-btn" onclick="checkTapAll()">✓ Check My Answer</button></div>`;
  return h;
}
function toggleTA(btn,val){
  if(answered)return;ensureTimer();
  if(tapAllSel.has(val)){tapAllSel.delete(val);btn.classList.remove('sel');}
  else{tapAllSel.add(val);btn.classList.add('sel');}
}
function checkTapAll(){
  if(answered)return;answered=true;
  const q=curQ();
  document.querySelectorAll('.ta-btn').forEach(b=>b.disabled=true);
  document.querySelector('.check-btn') && (document.querySelector('.check-btn').disabled=true);
  const isOk=q.correct.every(v=>tapAllSel.has(v))&&[...tapAllSel].every(v=>q.correct.includes(v));
  document.querySelectorAll('.ta-btn').forEach(b=>{
    const v=isNaN(b.dataset.val)?b.dataset.val:parseInt(b.dataset.val);
    const inCorrect=q.correct.includes(v)||q.correct.map(String).includes(String(v));
    const inSel=tapAllSel.has(v)||[...tapAllSel].map(String).includes(String(v));
    if(inCorrect&&inSel)b.classList.add('correct');
    else if(inCorrect&&!inSel)b.classList.add('missed');
    else if(!inCorrect&&inSel)b.classList.add('wrong');
    b.classList.remove('sel');
  });
  finishQ(isOk,isOk?null:`Correct: ${q.correct.join(', ')}`);
}

// ─── Sort ─────────────────────────────────────────────────────
function renderSort(q){
  sortSel=[];
  const sh=shuffle([...q.items]);
  const n=q.items.length;
  let h=`<div class="sort-wrap">
    <div class="sort-instruction">${q.order==='asc'?'⬆ Tap: Smallest → Largest':'⬇ Tap: Largest → Smallest'}</div>
    <div class="sort-slots" id="sortSlots">`;
  for(let i=0;i<n;i++)h+=`<div class="sort-slot" id="ss${i}"><span class="slot-num">${i+1}</span>?</div>`;
  h+=`</div><div class="sort-tiles" id="sortTiles">`;
  sh.forEach(v=>{h+=`<button class="sort-tile" data-v="${v}" onclick="tapSort(this,'${v}')">${v}</button>`;});
  h+=`</div><button class="check-btn" id="sortCheckBtn" style="display:none" onclick="checkSort()">✓ Check Order</button></div>`;
  return h;
}
function tapSort(btn,val){
  if(answered||btn.disabled)return;ensureTimer();
  sortSel.push(val);btn.classList.add('used');btn.disabled=true;
  const slot=document.getElementById(`ss${sortSel.length-1}`);
  if(slot){slot.textContent=val;slot.classList.add('filled');}
  const q=curQ();
  if(sortSel.length===q.items.length){const b=document.getElementById('sortCheckBtn');if(b)b.style.display='block';}
}
function checkSort(){
  if(answered)return;answered=true;
  const q=curQ();
  const correct=[...q.items].sort((a,b)=>{
    const na=isNaN(a)?a:Number(a),nb=isNaN(b)?b:Number(b);
    return q.order==='asc'?(na<nb?-1:1):(na>nb?-1:1);
  });
  const correctStr=correct.map(String);
  const sortSelStr=sortSel.map(String);
  const isOk=JSON.stringify(sortSelStr)===JSON.stringify(correctStr);
  const btn=document.getElementById('sortCheckBtn');if(btn)btn.disabled=true;
  q.items.forEach((_,i)=>{
    const slot=document.getElementById(`ss${i}`);if(!slot)return;
    slot.classList.remove('filled');
    slot.classList.add(sortSelStr[i]===correctStr[i]?'correct':'wrong');
  });
  finishQ(isOk,isOk?null:`Correct: ${correct.join(' → ')}`);
}

// ─── Fill In Blank (MCQ-style) ────────────────────────────────
function renderFillIn(q){
  const correct=q.o[q.a];const sh=shuffle(q.o);const ci=sh.indexOf(correct);
  const exprHtml=q.expr.replace(/___/g,`<span class="fillin-blank" id="fiBlank">___</span>`);
  let h=`<div class="fillin-wrap">
    <div class="fillin-expr">${exprHtml}</div>
    <div class="fillin-opts">`;
  sh.forEach((opt,i)=>{
    h+=`<button class="fi-btn" onclick="answerFillIn(this,${i===ci},'${opt.replace(/'/g,"\\'")}',${ci})">${opt}</button>`;
  });
  return h+`</div></div>`;
}
function answerFillIn(btn,isOk,val,ci){
  if(answered)return;answered=true;ensureTimer();
  document.querySelectorAll('.fi-btn').forEach((b,i)=>{b.disabled=true;if(i===ci)b.classList.add('correct');});
  const blank=document.getElementById('fiBlank');
  if(blank){blank.textContent=val;blank.style.color=isOk?'var(--green)':'var(--red)';}
  if(!isOk)btn.classList.add('wrong');
  finishQ(isOk,isOk?null:`Answer: ${document.querySelectorAll('.fi-btn')[ci].textContent}`);
}

// ─── Abacus ───────────────────────────────────────────────────
function renderAbacusQ(q){
  const MAX=9;
  let abHtml=`<div class="abacus-frame">`;
  [{v:q.h,cls:'H',lbl:'H'},{v:q.t,cls:'T',lbl:'T'},{v:q.o_val,cls:'O',lbl:'O'}].forEach(rod=>{
    abHtml+=`<div class="ab-rod-wrap"><div class="ab-rod-bar"></div>`;
    for(let i=0;i<MAX;i++) abHtml+=`<div class="ab-bead ${rod.cls} ${i<rod.v?'on':'off'}"></div>`;
    abHtml+=`<div class="ab-rod-label">${rod.lbl}</div></div>`;
  });
  abHtml+=`</div>`;
  const correct=q.opts[q.a];const sh=shuffle([...q.opts]);const ci=sh.indexOf(correct);
  let h=abHtml+`<div class="mcq-grid">`;
  sh.forEach((opt,i)=>{ h+=`<button class="mcq-btn" onclick="answerMCQ(this,${i===ci},'${correct}',${ci})">${opt}</button>`; });
  return h+`</div>`;
}

// ─── Type Answer (numpad) ─────────────────────────────────────
function renderTypeAns(){
  typeVal='';
  return`<div class="typeans-wrap">
    <div class="type-display" id="typeDisplay">___</div>
    <div class="numpad">
      ${'123456789'.split('').map(d=>`<button class="np-btn" onclick="np('${d}')">${d}</button>`).join('')}
      <button class="np-btn clr" onclick="np('clear')">✗</button>
      <button class="np-btn" onclick="np('0')">0</button>
      <button class="np-btn back" onclick="np('back')">⌫</button>
      <button class="np-btn go" onclick="checkTypeAns()">✓</button>
    </div>
  </div>`;
}
function np(v){
  if(answered)return;ensureTimer();
  if(v==='clear')typeVal='';
  else if(v==='back')typeVal=typeVal.slice(0,-1);
  else if(typeVal.length<7)typeVal+=v;
  const d=document.getElementById('typeDisplay');
  if(d){d.textContent=typeVal||'___';d.className='type-display'+(typeVal?' has-val':'');}
}
function checkTypeAns(){
  if(answered||!typeVal)return;answered=true;
  const q=curQ();const isOk=typeVal.trim()===String(q.answer).trim();
  const d=document.getElementById('typeDisplay');
  if(d)d.style.color=isOk?'var(--green)':'var(--red)';
  document.querySelectorAll('.np-btn').forEach(b=>b.disabled=true);
  finishQ(isOk,isOk?null:`Correct: ${q.answer}`);
}

// ═══ NEW TYPES ════════════════════════════════════════════════

// ─── Match the Following ──────────────────────────────────────
// Data: {type:'match', topic, q, pairs:[{l,r}, ...]}
function renderMatch(q){
  matchState={selectedLeft:null,connections:{},rightUsed:new Set()};
  const rightOrder=shuffle(q.pairs.map((_,i)=>i));
  let h=`<div class="match-wrap">
    <div class="match-hint">👈 Tap LEFT item, then tap its match on the RIGHT 👉</div>
    <div class="match-columns">
      <div class="match-col">`;
  q.pairs.forEach((p,li)=>{ h+=`<div class="match-item" id="ml${li}" onclick="clickML(${li})">${p.l}</div>`; });
  h+=`</div><div class="match-col">`;
  rightOrder.forEach(ri=>{ h+=`<div class="match-item" id="mr${ri}" onclick="clickMR(${ri})">${q.pairs[ri].r}</div>`; });
  h+=`</div></div>
    <button class="check-btn" id="matchCheckBtn" disabled onclick="checkMatch()">Connect all ${q.pairs.length} pairs first</button>
  </div>`;
  return h;
}
function clickML(li){
  if(answered)return;ensureTimer();
  // If already connected, disconnect
  if(matchState.connections[li]!==undefined){
    const oldRi=matchState.connections[li];
    matchState.rightUsed.delete(oldRi);
    delete matchState.connections[li];
    const rEl=document.getElementById(`mr${oldRi}`);
    if(rEl){rEl.style.background='';rEl.style.borderColor='';rEl.style.color='';}
    const lEl=document.getElementById(`ml${li}`);
    if(lEl){lEl.style.background='';lEl.style.borderColor='';lEl.style.color='';}
    updateMatchBtn();
    return;
  }
  // Toggle selection
  document.querySelectorAll('.match-col .match-item').forEach(el=>el.classList.remove('sel'));
  if(matchState.selectedLeft===li){matchState.selectedLeft=null;return;}
  matchState.selectedLeft=li;
  const lEl=document.getElementById(`ml${li}`);
  if(lEl)lEl.classList.add('sel');
}
function clickMR(ri){
  if(answered)return;
  if(matchState.selectedLeft===null){
    // Tap on connected right to remove connection
    let foundLi=null;
    for(const k in matchState.connections){if(matchState.connections[k]===ri){foundLi=parseInt(k);break;}}
    if(foundLi!==null){
      matchState.rightUsed.delete(ri);delete matchState.connections[foundLi];
      const rEl=document.getElementById(`mr${ri}`);if(rEl){rEl.style.background='';rEl.style.borderColor='';rEl.style.color='';}
      const lEl=document.getElementById(`ml${foundLi}`);if(lEl){lEl.style.background='';lEl.style.borderColor='';lEl.style.color='';}
      updateMatchBtn();
    }
    return;
  }
  ensureTimer();
  const li=matchState.selectedLeft;
  // Remove old right if left was previously connected to a different right
  if(matchState.connections[li]!==undefined){
    const oldRi=matchState.connections[li];matchState.rightUsed.delete(oldRi);
    const oldREl=document.getElementById(`mr${oldRi}`);if(oldREl){oldREl.style.background='';oldREl.style.borderColor='';oldREl.style.color='';}
  }
  // Remove old left if right was previously connected to a different left
  if(matchState.rightUsed.has(ri)){
    for(const k in matchState.connections){
      if(matchState.connections[k]===ri){
        const oldLi=parseInt(k);delete matchState.connections[oldLi];
        const oldLEl=document.getElementById(`ml${oldLi}`);if(oldLEl){oldLEl.style.background='';oldLEl.style.borderColor='';oldLEl.style.color='';}
        break;
      }
    }
    matchState.rightUsed.delete(ri);
  }
  // Connect
  const color=PAIR_COLORS[li%PAIR_COLORS.length];
  matchState.connections[li]=ri;matchState.rightUsed.add(ri);matchState.selectedLeft=null;
  const lEl=document.getElementById(`ml${li}`);
  if(lEl){lEl.classList.remove('sel');lEl.style.background=color+'30';lEl.style.borderColor=color;lEl.style.color=color;}
  const rEl=document.getElementById(`mr${ri}`);
  if(rEl){rEl.style.background=color+'30';rEl.style.borderColor=color;rEl.style.color=color;}
  updateMatchBtn();
}
function updateMatchBtn(){
  const q=curQ();const btn=document.getElementById('matchCheckBtn');if(!btn)return;
  const connected=Object.keys(matchState.connections).length;
  if(connected===q.pairs.length){btn.disabled=false;btn.textContent='✓ Check My Matches';}
  else{btn.disabled=true;btn.textContent=`Connect ${q.pairs.length-connected} more pair${q.pairs.length-connected!==1?'s':''}...`;}
}
function checkMatch(){
  if(answered)return;answered=true;
  const q=curQ();let allOk=true;
  q.pairs.forEach((_,li)=>{
    const ri=matchState.connections[li];
    const isOk=(ri===li);if(!isOk)allOk=false;
    const lEl=document.getElementById(`ml${li}`);
    if(lEl){lEl.style.background=isOk?'rgba(34,214,122,.25)':'rgba(255,94,94,.2)';lEl.style.borderColor=isOk?'var(--green)':'var(--red)';lEl.style.color=isOk?'var(--green)':'var(--red)';}
    if(ri!==undefined){
      const rEl=document.getElementById(`mr${ri}`);
      if(rEl){rEl.style.background=isOk?'rgba(34,214,122,.25)':'rgba(255,94,94,.2)';rEl.style.borderColor=isOk?'var(--green)':'var(--red)';rEl.style.color=isOk?'var(--green)':'var(--red)';}
    }
    // Show correct right if wrong
    if(!isOk){
      const correctREl=document.getElementById(`mr${li}`);
      if(correctREl&&ri!==li){correctREl.style.background='rgba(247,201,72,.15)';correctREl.style.borderColor='var(--accent)';correctREl.style.color='var(--accent)';}
    }
  });
  const btn=document.getElementById('matchCheckBtn');if(btn)btn.disabled=true;
  finishQ(allOk,allOk?null:'Check: highlighted items show correct matches');
}

// ─── Classify (tap-to-sort into categories) ───────────────────
// Data: {type:'classify', topic, q, categories:['A','B'], items:[{val,cat},...]}
function renderClassify(q){
  classifyState={held:null,placements:{}};
  let h=`<div class="classify-wrap">
    <div class="classify-hint">Tap an item 👆 then tap the correct box to place it</div>
    <div class="classify-cats">`;
  q.categories.forEach(cat=>{
    const id='cat_'+cat.replace(/[^a-zA-Z0-9]/g,'_');
    h+=`<div class="classify-box" id="catbox_${id}" onclick="classifyDropInBox('${cat}')">
      <div class="classify-box-label">${cat}</div>
      <div class="classify-items" id="${id}"></div>
    </div>`;
  });
  h+=`</div>
    <div class="classify-pool-label">TAP TO PICK</div>
    <div class="classify-pool" id="classifyPool"></div>
    <button class="check-btn" id="classifyCheckBtn" disabled onclick="checkClassify()">Place all ${q.items.length} items first</button>
  </div>`;
  return h;
}
function classifyInit(q){
  const pool=document.getElementById('classifyPool');if(!pool)return;
  const shuffled=shuffle([...q.items.map((_,i)=>i)]);
  shuffled.forEach(idx=>{
    const item=q.items[idx];
    const chip=document.createElement('div');
    chip.className='classify-chip';
    chip.id=`cc${idx}`;
    chip.dataset.idx=idx;
    chip.textContent=item.val;
    chip.onclick=()=>classifyPickItem(idx);
    pool.appendChild(chip);
  });
}
function classifyPickItem(idx){
  if(answered)return;ensureTimer();
  const q=curQ();
  // If chip is placed in a box, return it to pool
  if(classifyState.placements[idx]!==undefined){
    delete classifyState.placements[idx];
    const chip=document.getElementById(`cc${idx}`);
    const pool=document.getElementById('classifyPool');
    if(chip&&pool){chip.classList.remove('held');pool.appendChild(chip);}
    updateClassifyCheck(q);return;
  }
  // Toggle hold
  if(classifyState.held===idx){
    classifyState.held=null;
    const chip=document.getElementById(`cc${idx}`);if(chip)chip.classList.remove('held');
    // Remove can-drop highlight from boxes
    document.querySelectorAll('.classify-box').forEach(b=>b.classList.remove('can-drop'));
  } else {
    if(classifyState.held!==null){
      const prev=document.getElementById(`cc${classifyState.held}`);if(prev)prev.classList.remove('held');
    }
    classifyState.held=idx;
    const chip=document.getElementById(`cc${idx}`);if(chip)chip.classList.add('held');
    document.querySelectorAll('.classify-box').forEach(b=>b.classList.add('can-drop'));
  }
}
function classifyDropInBox(cat){
  if(answered||classifyState.held===null)return;
  const idx=classifyState.held;
  const q=curQ();
  const chip=document.getElementById(`cc${idx}`);
  const catId='cat_'+cat.replace(/[^a-zA-Z0-9]/g,'_');
  const box=document.getElementById(catId);
  if(chip&&box){
    chip.classList.remove('held');
    chip.onclick=()=>classifyPickItem(idx);
    box.appendChild(chip);
    classifyState.placements[idx]=cat;
    classifyState.held=null;
    document.querySelectorAll('.classify-box').forEach(b=>b.classList.remove('can-drop'));
    updateClassifyCheck(q);
  }
}
function updateClassifyCheck(q){
  const placed=Object.keys(classifyState.placements).length;
  const total=q.items.length;
  const btn=document.getElementById('classifyCheckBtn');if(!btn)return;
  if(placed===total){btn.disabled=false;btn.textContent='✓ Check My Sort';}
  else{btn.disabled=true;btn.textContent=`Place ${total-placed} more item${total-placed!==1?'s':''}...`;}
}
function checkClassify(){
  if(answered)return;answered=true;
  const q=curQ();let allOk=true;
  q.items.forEach((item,idx)=>{
    const chip=document.getElementById(`cc${idx}`);
    const placed=classifyState.placements[idx];
    const isOk=placed===item.cat;
    if(!isOk)allOk=false;
    if(chip)chip.classList.add(isOk?'correct':'wrong');
  });
  const btn=document.getElementById('classifyCheckBtn');if(btn)btn.disabled=true;
  finishQ(allOk,allOk?null:'Check the correct categories!');
}

// ─── Enter Value (keyboard input) ────────────────────────────
// Data: {type:'enterval', topic, q, answer:'42', hint:'(optional hint)'}
function renderEnterVal(q){
  const inputmode=q.inputmode||'numeric';
  return`<div class="enterval-wrap">
    ${q.hint?`<div class="tapall-hint">${q.hint}</div>`:''}
    <input class="enterval-input" id="evalInput" type="text" inputmode="${inputmode}" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Type your answer…" onkeydown="if(event.key==='Enter')checkEnterVal()">
    <button class="enterval-submit" id="evalBtn" onclick="checkEnterVal()">✓ Submit Answer</button>
  </div>`;
}
function checkEnterVal(){
  const inp=document.getElementById('evalInput');if(!inp)return;
  const val=inp.value.trim();if(!val)return;
  if(answered)return;answered=true;ensureTimer();
  const q=curQ();
  const acceptable=q.accept?q.accept.map(String):[String(q.answer)];
  const isOk=acceptable.includes(val.toLowerCase())||acceptable.map(v=>v.toLowerCase()).includes(val.toLowerCase());
  inp.classList.add(isOk?'correct':'wrong');
  inp.disabled=true;
  const btn=document.getElementById('evalBtn');if(btn)btn.disabled=true;
  finishQ(isOk,isOk?null:`Correct answer: ${q.answer}`);
}

// ─── Fill in the Blanks (typed) ───────────────────────────────
// Data: {type:'fillintext', topic, q:'shown above sentence', template:'sentence with ___ blanks', blanks:['ans1','ans2']}
function renderFillInText(q){
  let idx=0;
  const html=q.template.replace(/___/g,()=>{
    const i=idx++;
    return`<input class="flt-input" id="flt${i}" type="text" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="?">`;
  });
  return`<div class="fillintext-wrap">
    <div class="flt-sentence">${html}</div>
    <button class="check-btn" onclick="checkFillInText()">✓ Check Answers</button>
  </div>`;
}
function checkFillInText(){
  if(answered)return;answered=true;ensureTimer();
  const q=curQ();let allOk=true;
  q.blanks.forEach((ans,i)=>{
    const inp=document.getElementById(`flt${i}`);if(!inp)return;
    const val=inp.value.trim().toLowerCase();
    const isOk=val===String(ans).toLowerCase()||(q.accept&&q.accept[i]&&q.accept[i].map(String).includes(val));
    if(!isOk)allOk=false;
    inp.classList.add(isOk?'correct':'wrong');
    if(!isOk&&!inp.value)inp.value='?';
    if(!isOk)inp.value=inp.value||'?';
    inp.disabled=true;
  });
  const btn=document.querySelector('.fillintext-wrap .check-btn');if(btn)btn.disabled=true;
  finishQ(allOk,allOk?null:`Correct: ${q.blanks.join(', ')}`);
}

// ─── Finish question ──────────────────────────────────────────
function finishQ(isOk,hint){
  if(isOk){score++;results[qIdx]='ok';setCharHappy();}
  else{results[qIdx]='no';setCharSad();}
  const ls=document.getElementById('liveScore');if(ls)ls.textContent=score;
  const pb=document.getElementById('pbar');if(pb)pb.style.width=`${((qIdx+1)/totalQ())*100}%`;
  updateSidebar();
  const fb=document.getElementById('feedback');
  if(fb){fb.className=`feedback ${isOk?'ok':'no'} show`;fb.textContent=isOk?'✅ Brilliant!':('❌ '+(hint||'Not quite!'));}
  const nb=document.getElementById('nextBtn');if(nb)nb.className='next-btn show';
}

// ─── Next / Result ────────────────────────────────────────────
function nextQ(){
  if(qIdx<totalQ()-1){qIdx++;renderQ();}
  else showResult();
}
function showResult(){
  stopTimer();
  const tq=totalQ();const pct=Math.round((score/tq)*100);
  localStorage.setItem(scoreKey(level,setIdx),JSON.stringify({score,tq,pct,t:timerSecs}));
  buildSetRow();
  const qb=document.getElementById('quizBody');if(qb)qb.style.display='none';
  const rs=document.getElementById('resultScreen');if(rs)rs.classList.add('show');
  const rc=document.getElementById('resChar');if(rc)rc.textContent=char.e;
  const rt=document.getElementById('resTrophy');if(rt)rt.textContent=pct>=90?'🏆':pct>=70?'🥈':'🥉';
  const rscore=document.getElementById('resScore');if(rscore)rscore.textContent=score;
  const rStars=document.getElementById('resStars');if(rStars)rStars.textContent=pct>=90?'⭐⭐⭐':pct>=70?'⭐⭐':'⭐';
  const m=Math.floor(timerSecs/60),s=timerSecs%60;
  const rTime=document.getElementById('resTime');if(rTime)rTime.textContent=`Time: ${m}m ${s}s`;
  const rMsg=document.getElementById('resMsg');if(rMsg)rMsg.textContent=pct>=90?`GENIUS! ${char.n} is amazed! 🌟`:pct>=70?`Great job! ${char.n} is proud! 🎉`:`Keep practising! ${char.n} believes in you! 💪`;
  const nsb=document.getElementById('nextSetBtn');if(nsb)nsb.style.display=setIdx<SETS[level].length-1?'':'none';
  if(pct>=90)confetti();
}
function retrySet(){
  const rs=document.getElementById('resultScreen');if(rs)rs.classList.remove('show');
  const qb=document.getElementById('quizBody');if(qb)qb.style.display='block';
  startSet();
}
function goNextSet(){setIdx++;buildSetRow();startSet();}

// ─── Character ────────────────────────────────────────────────
function setCharNeutral(){
  const ce=document.getElementById('charEmo');if(ce){ce.textContent=char.e;ce.className='char-emo';}
  const cn=document.getElementById('charName');if(cn)cn.textContent=char.n;
  const cm=document.getElementById('charMood');if(cm){cm.className='cmood neutral';cm.textContent='Waiting for your answer...';}
  const cg=document.getElementById('charMsg');if(cg)cg.textContent='Give it your best! 💪';
}
function setCharHappy(){
  const ce=document.getElementById('charEmo');if(ce)ce.className='char-emo pop';
  const cm=document.getElementById('charMood');if(cm){cm.className='cmood ok-mood';cm.textContent='🎉 Amazing!';}
  const cg=document.getElementById('charMsg');if(cg)cg.textContent=rand(char.y);
}
function setCharSad(){
  const ce=document.getElementById('charEmo');if(ce)ce.className='char-emo shake';
  const cm=document.getElementById('charMood');if(cm){cm.className='cmood no-mood';cm.textContent='😔 Oh no...';}
  const cg=document.getElementById('charMsg');if(cg)cg.textContent=rand(char.x);
}

// ─── Scoreboard Modal ─────────────────────────────────────────
let modalLevel='beginner';
function openModal(){modalLevel=level;renderModalFilters();renderModalList();const m=document.getElementById('modalOv');if(m)m.classList.add('show');}
function closeModal(){const m=document.getElementById('modalOv');if(m)m.classList.remove('show');}
function renderModalFilters(){
  const el=document.getElementById('modalFilters');if(!el)return;el.innerHTML='';
  ['beginner','pro'].forEach(l=>{
    const b=document.createElement('button');
    b.className='mf-btn'+(l===modalLevel?' active':'');
    b.textContent=l==='beginner'?'⭐ Beginner':'🔥 Pro';
    b.onclick=()=>{modalLevel=l;renderModalFilters();renderModalList();};
    el.appendChild(b);
  });
}
function renderModalList(){
  const el=document.getElementById('modalList');if(!el)return;el.innerHTML='';
  let found=false;
  SETS[modalLevel].forEach((_,i)=>{
    const raw=localStorage.getItem(scoreKey(modalLevel,i));if(!raw)return;found=true;
    const d=JSON.parse(raw);
    const stars=d.pct>=90?'⭐⭐⭐':d.pct>=70?'⭐⭐':'⭐';
    const m=Math.floor(d.t/60),s=d.t%60;
    const row=document.createElement('div');
    row.className='score-row'+(d.pct>=90?' perfect':'');
    row.innerHTML=`<div><div class="sr-lbl">Set ${i+1}</div><div class="sr-sub">${m}m ${s}s</div></div><div style="text-align:right"><div class="sr-score">${d.score}/${d.tq}</div><div class="sr-stars">${stars}</div></div>`;
    el.appendChild(row);
  });
  if(!found)el.innerHTML='<div class="empty-msg">No scores yet — start quizzing! 🚀</div>';
}
document.addEventListener('click',e=>{if(e.target&&e.target.id==='modalOv')closeModal();});

// ─── Confetti ─────────────────────────────────────────────────
function confetti(){
  const cv=document.getElementById('confetti-canvas');if(!cv)return;
  const ctx=cv.getContext('2d');cv.width=innerWidth;cv.height=innerHeight;
  const ps=Array.from({length:120},()=>({x:Math.random()*cv.width,y:-20,r:Math.random()*6+3,c:`hsl(${Math.random()*360},90%,60%)`,vx:(Math.random()-.5)*4,vy:Math.random()*5+2,a:Math.random()*360}));
  let f=0;const draw=()=>{ctx.clearRect(0,0,cv.width,cv.height);ps.forEach(p=>{ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a*Math.PI/180);ctx.fillStyle=p.c;ctx.fillRect(-p.r,-p.r/2,p.r*2,p.r);ctx.restore();p.x+=p.vx;p.y+=p.vy;p.a+=3;if(p.y>cv.height){p.y=-10;p.x=Math.random()*cv.width;}});if(f++<220)requestAnimationFrame(draw);else ctx.clearRect(0,0,cv.width,cv.height);};draw();
}

// ─── Init ─────────────────────────────────────────────────────
initNav();
buildSetRow();
startSet();
