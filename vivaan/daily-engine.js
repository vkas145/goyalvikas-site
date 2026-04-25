/* Mathemagics · Daily World engine
   ──────────────────────────────────
   Day-of-week themes, week-seeded variant rotation, per-grade question
   pool, and the retention-loop store (streak, stamps, sticker book).
   Pure data + helpers. No DOM manipulation here — see daily.html and
   activities/*.js for the play layer.
*/
(function(){
  'use strict';

  // ─── 7-day theme map ─────────────────────────────────────────
  // Index 0 = Sunday (per Date.getDay()). Sunday is Mystery Day so the
  // table reads naturally Mon→Sun.
  const THEMES = {
    'mystery':           { id:'mystery',           day:'Sun', emoji:'🔮', name:"The Big Mystery",      color:'#7C3AED', bg:'linear-gradient(135deg,#3B0764 0%,#581C87 60%,#7C3AED 100%)', sticker:{e:'🔍', n:'Mystery Lens'},  tagline:"Reveal a hidden picture, one answer at a time" },
    'number-kingdom':    { id:'number-kingdom',    day:'Mon', emoji:'👑', name:"Number Kingdom",       color:'#D97706', bg:'linear-gradient(135deg,#FEF3C7 0%,#FCD34D 60%,#D97706 100%)', sticker:{e:'👑', n:'Golden Crown'}, tagline:"Help the King fix the kingdom's numbers" },
    'shape-safari':      { id:'shape-safari',      day:'Tue', emoji:'🔷', name:"Shape Safari",          color:'#059669', bg:'linear-gradient(135deg,#D1FAE5 0%,#34D399 60%,#059669 100%)', sticker:{e:'🎩', n:'Safari Hat'},   tagline:"Spot every shape hiding in the jungle" },
    'rainbow-lab':       { id:'rainbow-lab',       day:'Wed', emoji:'🌈', name:"Rainbow Lab",           color:'#DB2777', bg:'linear-gradient(135deg,#FCE7F3 0%,#F472B6 60%,#DB2777 100%)', sticker:{e:'🎨', n:'Paint Palette'},tagline:"Every right answer paints the picture" },
    'math-quest':        { id:'math-quest',        day:'Thu', emoji:'📖', name:"Math Quest",            color:'#9333EA', bg:'linear-gradient(135deg,#EDE9FE 0%,#A78BFA 60%,#7C3AED 100%)', sticker:{e:'📜', n:'Quest Scroll'}, tagline:"A new story. You're the hero." },
    'lightning-round':   { id:'lightning-round',   day:'Fri', emoji:'⚡', name:"Lightning Round",        color:'#EAB308', bg:'linear-gradient(135deg,#FEF9C3 0%,#FACC15 60%,#CA8A04 100%)', sticker:{e:'⚡', n:'Lightning Bolt'},tagline:"Fast play! See how far you can get." },
    'builders-workshop': { id:'builders-workshop', day:'Sat', emoji:'🏗️', name:"Builder's Workshop",    color:'#EA580C', bg:'linear-gradient(135deg,#FFEDD5 0%,#FB923C 60%,#EA580C 100%)', sticker:{e:'🔨', n:'Builder\'s Hammer'},tagline:"Drag, stack, build the answer" }
  };

  // Sunday=0 → mystery. Spec's array order:
  const THEME_BY_DOW = ['mystery', 'number-kingdom', 'shape-safari', 'rainbow-lab', 'math-quest', 'lightning-round', 'builders-workshop'];

  function todayDOW(){ return new Date().getDay(); }
  function todayThemeId(){ return THEME_BY_DOW[todayDOW()]; }
  function yesterdayThemeId(){ return THEME_BY_DOW[(todayDOW() + 6) % 7]; }
  function tomorrowThemeId(){ return THEME_BY_DOW[(todayDOW() + 1) % 7]; }

  // ISO-ish week seed: stable for everyone on the same calendar day.
  function weekSeed(){
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    return Math.ceil((((now - start) / 86400000) + start.getDay() + 1) / 7);
  }

  // YYYY-MM-DD for today (local, not UTC — kids' midnight, not London's).
  function todayKey(){
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2,'0');
    const dd= String(d.getDate()).padStart(2,'0');
    return `${y}-${m}-${dd}`;
  }
  function offsetDayKey(deltaDays){
    const d = new Date();
    d.setDate(d.getDate() + deltaDays);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2,'0');
    const dd= String(d.getDate()).padStart(2,'0');
    return `${y}-${m}-${dd}`;
  }

  // ─── Retention store ─────────────────────────────────────────
  const KEYS = {
    streak:   'mm_streak',     // { count, freezes, lastDate }
    stamps:   'mm_stamps',     // { 'YYYY-MM-DD': themeId }
    stickers: 'mm_stickers',   // string[] (themeIds in award order, dups OK = repeat plays)
    daily:    (date) => `mm_daily_${date}`, // { themeId, score, total, completedAt }
  };

  function readJSON(k, fallback){
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
    catch(e){ return fallback; }
  }
  function writeJSON(k, v){
    try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){}
  }

  function getStreak(){
    return readJSON(KEYS.streak, { count:0, freezes:0, lastDate:null });
  }
  function getStamps(){ return readJSON(KEYS.stamps, {}); }
  function getStickers(){ return readJSON(KEYS.stickers, []); }
  function getDaily(date){ return readJSON(KEYS.daily(date), null); }

  function isCompletedToday(){
    const d = getDaily(todayKey());
    return !!(d && d.completedAt);
  }
  function isCompletedYesterday(){
    const d = getDaily(offsetDayKey(-1));
    return !!(d && d.completedAt);
  }

  // Mark today complete: bumps streak (with 1-day freeze grace), drops a
  // stamp on this date, awards today's themed sticker. Idempotent if
  // called twice the same day (won't double-stamp or double-award).
  function markCompletedToday(themeId, score, total){
    const day = todayKey();
    const existing = getDaily(day);
    if (existing && existing.completedAt) {
      // Already completed today — just update score if higher.
      if (score > (existing.score || 0)) {
        writeJSON(KEYS.daily(day), { ...existing, score, total });
      }
      return { firstCompletionToday:false, streak:getStreak(), stickerAwarded:null };
    }

    writeJSON(KEYS.daily(day), { themeId, score, total, completedAt: Date.now() });

    // Stamp
    const stamps = getStamps();
    stamps[day] = themeId;
    writeJSON(KEYS.stamps, stamps);

    // Streak math
    const streak = getStreak();
    const yesterday = offsetDayKey(-1);
    let newCount, newFreezes = streak.freezes || 0;
    if (!streak.lastDate) {
      newCount = 1;
    } else if (streak.lastDate === day) {
      newCount = streak.count; // safety; we already returned above
    } else if (streak.lastDate === yesterday) {
      newCount = (streak.count || 0) + 1;
    } else if (streak.lastDate === offsetDayKey(-2) && (streak.freezes || 0) === 0) {
      // Missed exactly one day — burn the freeze, keep streak alive.
      newCount = (streak.count || 0) + 1;
      newFreezes = 1;
    } else {
      // Reset
      newCount = 1;
      newFreezes = 0;
    }
    writeJSON(KEYS.streak, { count:newCount, freezes:newFreezes, lastDate:day });

    // Sticker (one per completion — they stack)
    const stickers = getStickers();
    stickers.push(themeId);
    writeJSON(KEYS.stickers, stickers);

    return {
      firstCompletionToday:true,
      streak: { count:newCount, freezes:newFreezes, lastDate:day },
      stickerAwarded: THEMES[themeId] && THEMES[themeId].sticker
    };
  }

  // ─── Question pool — multi-grade ─────────────────────────────
  // Goal: every activity can ask `getQuestionsForGrade(grade, count, opts)`
  // and get back grade-appropriate questions of the kinds it understands.
  //
  // Sources:
  //   • Grades 1, 3-10  → window.QUIZ_DATA (loaded from /vivaan-quiz-data.js)
  //   • Grade 2         → curated GRADE2_POOL below (math-chN.html pages
  //                       embed their own format which is hard to reuse;
  //                       this is a deliberate mini-pool covering G2 scope).
  //
  // Every returned question has the same shape used by activities:
  //   { type:'mcq'|'tf'|'enterval'|'fillin', q, ...typeFields }

  const GRADE2_POOL = [
    // Numbers & place value
    {t:'PV', type:'mcq',      q:"What is the place value of 7 in 372?", o:["70","7","700","372"], a:0},
    {t:'PV', type:'enterval', q:"How many tens are in 56?", a:5},
    {t:'PV', type:'enterval', q:"What number is 3 hundreds + 2 tens + 5 ones?", a:325},
    {t:'PV', type:'mcq',      q:"Which is biggest?", o:["872","827","782","728"], a:0},
    {t:'PV', type:'enterval', q:"What comes after 199?", a:200},
    {t:'PV', type:'tf',       q:"45 is greater than 54.", a:false},
    {t:'PV', type:'fillin',   q:"100, 200, 300, ___, 500", blanks:["400"]},
    {t:'PV', type:'enterval', q:"What is 10 more than 248?", a:258},
    // Skip counting
    {t:'Skip', type:'fillin', q:"Skip count by 2: 4, 6, 8, ___", blanks:["10"]},
    {t:'Skip', type:'fillin', q:"Skip count by 5: 15, 20, 25, ___", blanks:["30"]},
    {t:'Skip', type:'fillin', q:"Skip count by 10: 30, 40, ___, 60", blanks:["50"]},
    {t:'Skip', type:'enterval', q:"What's next: 12, 14, 16, ?", a:18},
    // Addition
    {t:'Add', type:'enterval', q:"23 + 45 = ?", a:68},
    {t:'Add', type:'enterval', q:"38 + 27 = ?", a:65},
    {t:'Add', type:'mcq',      q:"54 + 30 = ?", o:["84","85","74","94"], a:0},
    {t:'Add', type:'fillin',   q:"56 + ___ = 60", blanks:["4"]},
    {t:'Add', type:'enterval', q:"100 + 25 = ?", a:125},
    {t:'Add', type:'tf',       q:"7 + 8 = 15.", a:true},
    // Subtraction
    {t:'Sub', type:'enterval', q:"56 - 23 = ?", a:33},
    {t:'Sub', type:'enterval', q:"80 - 35 = ?", a:45},
    {t:'Sub', type:'mcq',      q:"100 - 27 = ?", o:["73","83","63","77"], a:0},
    {t:'Sub', type:'fillin',   q:"15 - ___ = 7", blanks:["8"]},
    {t:'Sub', type:'tf',       q:"50 - 50 = 1.", a:false},
    // Multiplication intro
    {t:'Mul', type:'enterval', q:"3 × 4 = ?", a:12},
    {t:'Mul', type:'enterval', q:"5 × 5 = ?", a:25},
    {t:'Mul', type:'mcq',      q:"2 × 7 = ?", o:["14","16","12","9"], a:0},
    {t:'Mul', type:'fillin',   q:"3 × ___ = 18", blanks:["6"]},
    // Division intro (sharing)
    {t:'Div', type:'enterval', q:"12 ÷ 3 = ?", a:4},
    {t:'Div', type:'enterval', q:"20 ÷ 5 = ?", a:4},
    {t:'Div', type:'mcq',      q:"Share 18 chocolates between 6 friends. Each gets?", o:["3","2","6","4"], a:0},
    // Shapes
    {t:'Shp', type:'mcq',      q:"How many sides does a triangle have?", o:["3","4","2","5"], a:0},
    {t:'Shp', type:'mcq',      q:"How many corners does a square have?", o:["4","3","5","6"], a:0},
    {t:'Shp', type:'tf',       q:"A circle has 0 corners.", a:true},
    {t:'Shp', type:'enterval', q:"A hexagon has how many sides?", a:6},
    {t:'Shp', type:'mcq',      q:"Which has 5 sides?", o:["Pentagon","Hexagon","Square","Triangle"], a:0},
    {t:'Shp', type:'tf',       q:"A rectangle has 4 sides.", a:true},
    // Time
    {t:'Tim', type:'enterval', q:"How many minutes in 1 hour?", a:60},
    {t:'Tim', type:'enterval', q:"Days in 1 week?", a:7},
    {t:'Tim', type:'mcq',      q:"Which is the longest?", o:["1 day","1 hour","1 minute","1 second"], a:0},
    {t:'Tim', type:'mcq',      q:"What time does the clock show? 🕒", o:["3 o'clock","6 o'clock","9 o'clock","12 o'clock"], a:0},
    // Money
    {t:'Mon', type:'enterval', q:"₹50 + ₹30 = ?", a:80},
    {t:'Mon', type:'enterval', q:"₹100 - ₹40 = ?", a:60},
    {t:'Mon', type:'mcq',      q:"How many ₹10 notes make ₹50?", o:["5","4","6","10"], a:0},
    // Length / measurement
    {t:'Len', type:'enterval', q:"How many cm in 1 metre?", a:100},
    {t:'Len', type:'mcq',      q:"Which is longest?", o:["1 m","100 cm","50 cm","1 cm"], a:0},  // 1m=100cm tie; pick the explicit-meter
    {t:'Len', type:'tf',       q:"A pencil is shorter than a bus.", a:true},
    // Patterns
    {t:'Pat', type:'fillin',   q:"AB pattern: A B A B ___", blanks:["A"]},
    {t:'Pat', type:'mcq',      q:"What's next: 🔴🔵🔴🔵🔴?", o:["🔵","🔴","🟢","🟡"], a:0},
    {t:'Pat', type:'fillin',   q:"Next: 5, 10, 15, 20, ___", blanks:["25"]},
    // Word problems
    {t:'Wrd', type:'enterval', q:"Anu had 12 pencils. She gave 3 away. How many left?", a:9},
    {t:'Wrd', type:'enterval', q:"4 boxes have 5 chocolates each. Total chocolates?", a:20},
    {t:'Wrd', type:'enterval', q:"A bus has 32 people. 18 get off. How many left?", a:14},
    {t:'Wrd', type:'enterval', q:"Ravi has ₹100. He buys a toy for ₹65. Change?", a:35},
    // Even/Odd
    {t:'EO', type:'mcq', q:"Which is an even number?", o:["8","7","11","13"], a:0},
    {t:'EO', type:'mcq', q:"Which is an odd number?", o:["9","12","8","20"], a:0},
    {t:'EO', type:'tf',  q:"All even numbers can be split into 2 equal groups.", a:true}
  ];

  // Convert QUIZ_DATA shape (used by other grades) → activity-friendly:
  //   QUIZ_DATA[grade][ch] = { title, beginner:[5×10 questions], pro:[5×10] }
  // Each question is already in {type, q, o, a, blanks, pool, correct, ...} shape.
  function flattenQuizData(grade){
    const out = [];
    if (!window.QUIZ_DATA || !window.QUIZ_DATA[grade]) return out;
    const chapters = window.QUIZ_DATA[grade];
    for (const chKey of Object.keys(chapters)){
      const ch = chapters[chKey];
      for (const tier of ['beginner','pro']){
        const sets = ch[tier] || [];
        for (const set of sets){
          for (const q of set){
            // Activity layer only consumes mcq/tf/fillin/enterval; tapall is
            // skipped here (specific activities can pull tapall directly).
            if (q.type === 'tapall') continue;
            out.push({...q, _ch: chKey, _tier: tier});
          }
        }
      }
    }
    return out;
  }

  // Stable shuffle: deterministic seed → activities show same questions
  // for everyone on same week, but still feel "random" within the week.
  function seededShuffle(arr, seed){
    const a = arr.slice();
    let s = seed || 1;
    for (let i = a.length - 1; i > 0; i--){
      s = (s * 9301 + 49297) % 233280;
      const j = Math.floor((s / 233280) * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getQuestionsForGrade(grade, count, opts){
    opts = opts || {};
    let pool;
    if (grade === 2){
      pool = GRADE2_POOL.slice();
    } else {
      pool = flattenQuizData(grade);
      if (!pool.length){
        // Fallback if QUIZ_DATA hasn't loaded — use Grade 2 pool so the
        // activity still runs.
        pool = GRADE2_POOL.slice();
      }
    }
    if (opts.types && opts.types.length){
      // Only include questions whose type is in the requested list.
      // MCQ has no `type` field; treat as 'mcq'.
      const typeSet = new Set(opts.types);
      pool = pool.filter(q => typeSet.has(q.type || 'mcq'));
    }
    if (!pool.length) return [];
    const seed = (weekSeed() * 1000) + grade + (opts.salt || 0);
    const shuffled = seededShuffle(pool, seed);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  // ─── Public API ──────────────────────────────────────────────
  window.MM_DAILY = {
    THEMES,
    todayThemeId, yesterdayThemeId, tomorrowThemeId,
    todayKey, offsetDayKey, weekSeed,
    getStreak, getStamps, getStickers, getDaily,
    isCompletedToday, isCompletedYesterday,
    markCompletedToday,
    getQuestionsForGrade,
    GRADE2_POOL // exposed for testing
  };
})();
