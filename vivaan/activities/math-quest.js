/* Thursday — Math Quest 📖
   4-panel illustrated story; each panel has a math gate. Wrong answer
   shows a hint, lets them try again — never "wrong!". */
(function(){
  'use strict';

  const STORIES = {
    'birthday': {
      title: "Arjun's Birthday Party",
      panels: [
        { e:'🎈', text: "Arjun is blowing up balloons. He has __ red and __ blue balloons. How many in total?", build:(g) => {
            const a = g <= 2 ? rand(3, 8) : g <= 4 ? rand(12, 30) : rand(40, 90);
            const b = g <= 2 ? rand(3, 8) : g <= 4 ? rand(12, 30) : rand(40, 90);
            return { q: `Arjun has ${a} red balloons and ${b} blue balloons. How many in total?`, ans: a+b };
        }},
        { e:'🎂', text: "The cake is sliced into equal pieces.", build:(g) => {
            const slices = g <= 2 ? 8 : g <= 4 ? 12 : 24;
            const friends = g <= 2 ? 4 : g <= 4 ? 6 : 8;
            return { q: `A cake of ${slices} slices is shared equally among ${friends} friends. Each friend gets?`, ans: slices/friends };
        }},
        { e:'🛍️', text: "Shopping for return gifts.", build:(g) => {
            const items = g <= 2 ? rand(3, 6) : g <= 4 ? rand(8, 14) : rand(12, 25);
            const each = g <= 2 ? 5 : g <= 4 ? 12 : 25;
            return { q: `Arjun buys ${items} return gifts at ₹${each} each. Total cost?`, ans: items*each };
        }},
        { e:'🎁', text: "Time to count the gifts!", build:(g) => {
            const total = g <= 2 ? rand(10, 20) : g <= 4 ? rand(20, 50) : rand(30, 80);
            const opened = Math.floor(total * (g <= 2 ? 0.4 : 0.55));
            return { q: `Arjun got ${total} gifts. He has opened ${opened}. How many left to open?`, ans: total-opened };
        }}
      ]
    },
    'jungle': {
      title: "The Jungle Rescue",
      panels: [
        { e:'🐒', text: "A monkey troop is trapped on a tree.", build:(g) => {
            const a = g <= 2 ? rand(5, 12) : g <= 4 ? rand(20, 60) : rand(40, 120);
            const b = g <= 2 ? rand(2, 6) : g <= 4 ? rand(8, 25) : rand(15, 50);
            return { q: `${a} monkeys are stuck. ${b} more arrive to help. Total monkeys now?`, ans: a+b };
        }},
        { e:'🌉', text: "Build a bridge.", build:(g) => {
            const total = g <= 2 ? rand(8, 14) : g <= 4 ? rand(20, 45) : rand(50, 100);
            const have = Math.floor(total/2);
            return { q: `The bridge needs ${total} planks. You have ${have}. How many more do you need?`, ans: total-have };
        }},
        { e:'🐘', text: "Elephant parade!", build:(g) => {
            const groups = g <= 2 ? 3 : g <= 4 ? 4 : 5;
            const each = g <= 2 ? 4 : g <= 4 ? 8 : 12;
            return { q: `${groups} families of elephants, ${each} in each. Total elephants?`, ans: groups*each };
        }},
        { e:'🏆', text: "The animals are saved!", build:(g) => {
            const start = g <= 2 ? 20 : g <= 4 ? 80 : 200;
            const saved = g <= 2 ? rand(8, 16) : g <= 4 ? rand(30, 70) : rand(80, 180);
            return { q: `${start} animals were in danger. You saved ${saved}. How many still need help?`, ans: start-saved };
        }}
      ]
    },
    'space': {
      title: "Space Mission",
      panels: [
        { e:'🚀', text: "Countdown to launch.", build:(g) => {
            const a = g <= 2 ? rand(5, 9) : g <= 4 ? rand(20, 40) : rand(50, 100);
            return { q: `Mission control counts down from ${a}, one number per second. After 3 seconds, the count is at?`, ans: a-3 };
        }},
        { e:'⭐', text: "Skip-count the stars.", build:(g) => {
            const step = g <= 2 ? 2 : g <= 4 ? 5 : 25;
            const start = g <= 2 ? 4 : g <= 4 ? 25 : 100;
            return { q: `Skip count by ${step}: ${start}, ${start+step}, ${start+2*step}, ?`, ans: start+3*step };
        }},
        { e:'🪐', text: "Planet shapes.", build:(g) => {
            // Simple shape question, no numbers
            return { q: `A planet is round. How many corners does it have?`, ans: 0 };
        }},
        { e:'🌌', text: "Mission accomplished.", build:(g) => {
            const days = g <= 2 ? rand(3, 7) : g <= 4 ? rand(10, 20) : rand(30, 90);
            const hrs = days * 24;
            return { q: `The mission lasted ${days} days. Each day is 24 hours. Total hours?`, ans: hrs };
        }}
      ]
    }
  };

  function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

  function cells(activeIdx, total){
    let s = '';
    for (let i = 0; i < total; i++) s += `<div class="a-progress-cell ${i < activeIdx ? 'done' : i === activeIdx ? 'active' : ''}"></div>`;
    return s;
  }

  window.MM_ACT_MATH_QUEST = function(opts){
    const { grade, container, onComplete } = opts;
    const seed = window.MM_DAILY ? window.MM_DAILY.weekSeed() : 1;
    const keys = Object.keys(STORIES);
    const story = STORIES[keys[seed % keys.length]];

    let idx = 0, score = 0;
    const total = story.panels.length;

    function next(){
      if (idx >= total){
        container.innerHTML = `
          <div class="a-card" style="text-align:center">
            <div style="font-size:14px;font-weight:700;opacity:0.7">📜 ${story.title}</div>
            <div style="font-size:64px;line-height:1;margin:14px 0">🏆</div>
            <div style="font-size:24px;font-weight:900">The End!</div>
            <div style="opacity:0.8;margin-top:6px">Hero score: ${score}/${total}</div>
          </div>
        `;
        setTimeout(() => onComplete({ score, total }), 1100);
        return;
      }
      const panel = story.panels[idx];
      const q = panel.build(grade);
      let attempts = 0;
      container.innerHTML = `
        <div class="a-card">
          <div class="a-progress">${cells(idx, total)}</div>
          <div style="text-align:center;font-size:12px;font-weight:800;opacity:0.7;letter-spacing:0.06em;text-transform:uppercase">${story.title} · Panel ${idx+1}/${total}</div>
          <div style="text-align:center;font-size:64px;line-height:1;margin:10px 0">${panel.e}</div>
          <div class="a-q" style="font-size:18px">${q.q}</div>
          <div class="a-input-row">
            <input class="a-input" id="aInput" inputmode="numeric" pattern="[0-9-]*" autocomplete="off" />
            <button class="a-submit" id="aSubmit" type="button">Answer</button>
          </div>
          <div class="a-feedback" id="aFb" style="margin-top:10px"></div>
        </div>
      `;
      const inp = container.querySelector('#aInput');
      const sub = container.querySelector('#aSubmit');
      const fb = container.querySelector('#aFb');
      inp.focus();
      function submit(){
        const v = parseInt(inp.value, 10);
        const isOk = !isNaN(v) && v === q.ans;
        if (isOk){
          fb.className = 'a-feedback ok';
          fb.textContent = attempts === 0 ? '✨ Spot on, hero!' : '✨ Got it! On we go!';
          if (attempts === 0) score++;
          sub.disabled = true; inp.disabled = true;
          setTimeout(() => { idx++; next(); }, 900);
        } else {
          attempts++;
          fb.className = 'a-feedback no';
          if (attempts === 1) fb.textContent = '🤔 Hmm, try again!';
          else { fb.textContent = `Heroes never give up — the answer is ${q.ans}. Onwards!`; sub.disabled = true; inp.disabled = true; setTimeout(() => { idx++; next(); }, 1500); }
          inp.value = ''; inp.focus();
        }
      }
      sub.onclick = submit;
      inp.onkeydown = (e) => { if (e.key === 'Enter') submit(); };
    }
    next();
  };
})();
