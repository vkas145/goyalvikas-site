/* Vivaan · Grade 2 background music engine
   ─────────────────────────────────────────
   Self-contained Web Audio synth — same kids-band tracks as the main
   inline quiz on index.html. Exposes:
     window.startQuizMusic(chapterNum)
     window.stopQuizMusic(fast?)
     window.playQuizResultChime(pct)
   and auto-injects a floating 🎵/🔇 toggle button (top-right).
   Per-chapter track is picked deterministically from CHAPTER.key. */
(function(){
  'use strict';

  const MUSIC_STORE_KEY = 'vivaan_music';

  // ─── Synth voices ─────────────────────────────────────────────
  // Pluck = piano-ish triangle with longer release. Marimba = wooden,
  // softer attack. Both feel "musical" rather than chiptune-bleepy.
  const V_PLUCK   = { osc:'triangle', atk:0.004, rel:0.35, peak:0.30 };
  const V_MARIMBA = { osc:'sine',     atk:0.002, rel:0.55, peak:0.28 };
  const V_BASS    = { osc:'sine',     atk:0.020, rel:0.18, peak:0.20 };

  // Kids tracks rewritten with proper hook melodies + I-V-vi-IV-ish
  // chord cycles. Two tracks; chapter index picks one deterministically
  // so each chapter has a consistent "theme song".
  const TRACKS = [
    { name:'Happy Day', bpm:100, lead:V_PLUCK, bassV:V_BASS,
      mel:[
        [60,1],[64,1],[67,1],[72,1],
        [67,0.5],[64,0.5],[60,1],
        [62,1],[67,1],
        [69,1],[65,1],[64,1],[60,1],
        [67,2],[72,2]
      ],
      bass:[
        [48,2],[55,2], [48,2],[55,2],
        [57,2],[64,2],
        [53,2],[55,2]
      ] },
    { name:'Skipping Steps', bpm:116, lead:V_MARIMBA, bassV:V_BASS,
      mel:[
        [67,0.5],[69,0.5],[72,1],
        [67,0.5],[69,0.5],[72,1],
        [74,1],[76,1],[79,2],
        [76,0.5],[74,0.5],[72,1],
        [69,0.5],[67,0.5],[64,1],
        [67,2],[72,2]
      ],
      bass:[
        [48,2],[55,2], [48,2],[55,2],
        [53,2],[48,2], [55,2],[48,2]
      ] }
  ];

  function pickTrack(chapterNum){
    const idx = ((chapterNum || 1) - 1) % TRACKS.length;
    return TRACKS[idx];
  }

  // ─── Audio state ──────────────────────────────────────────────
  const M = { ctx:null, master:null, lp:null, active:false, tickHandle:null, nextTime:0, track:null };

  // Default music is OFF (user explicitly preferred quiet — opt-in via toggle).
  function musicPref(){
    const v = localStorage.getItem(MUSIC_STORE_KEY);
    return v === '1';
  }
  function setMusicPref(on){ localStorage.setItem(MUSIC_STORE_KEY, on ? '1' : '0'); }

  function ensureAudio(){
    if (M.ctx) return true;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return false;
      M.ctx = new Ctx();
      // Compressor first to catch any peak stacking before the destination.
      // This is the main fix for the "breaking" / clipping artifacts kids
      // hear when multiple notes overlap at chord changes.
      M.comp = M.ctx.createDynamicsCompressor();
      M.comp.threshold.value = -18;
      M.comp.knee.value      = 24;
      M.comp.ratio.value     = 4;
      M.comp.attack.value    = 0.005;
      M.comp.release.value   = 0.180;
      M.master = M.ctx.createGain();
      M.master.gain.value = 0.10;     // a touch quieter — was 0.13
      M.lp = M.ctx.createBiquadFilter();
      M.lp.type = 'lowpass';
      M.lp.frequency.value = 2200;    // warmer — less treble harshness
      M.lp.Q.value = 0.5;
      M.master.connect(M.lp);
      M.lp.connect(M.comp);
      M.comp.connect(M.ctx.destination);
      return true;
    } catch(e){ return false; }
  }

  function midiHz(m){ return 440 * Math.pow(2, (m - 69) / 12); }

  function scheduleTone(freq, start, dur, voice){
    const osc = M.ctx.createOscillator();
    const g = M.ctx.createGain();
    osc.type = voice.osc;
    osc.frequency.setValueAtTime(freq, start);
    const peak = voice.peak;
    // Clamp envelopes so attack+release fit inside note duration (avoids
    // overlapping ramps which were causing pops at note boundaries).
    const atk = Math.min(voice.atk, dur * 0.3);
    const rel = Math.min(voice.rel, dur * 0.65);
    g.gain.setValueAtTime(0, start);                                 // start at 0, not 0.0001
    g.gain.linearRampToValueAtTime(peak, start + atk);
    const holdEnd = start + Math.max(atk + 0.005, dur - rel);
    g.gain.linearRampToValueAtTime(peak, holdEnd);                   // smooth hold (no jump)
    g.gain.linearRampToValueAtTime(0, start + dur);                  // linear ramp to silence (no exponential tail click)
    osc.connect(g);
    g.connect(M.master);
    osc.start(start);
    osc.stop(start + dur + 0.02);
  }

  function scheduleKick(start){
    const osc = M.ctx.createOscillator();
    const g = M.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, start);
    osc.frequency.exponentialRampToValueAtTime(45, start + 0.12);
    // Ramp gain in/out instead of jumping → no transient click.
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(0.22, start + 0.005);
    g.gain.linearRampToValueAtTime(0, start + 0.18);
    osc.connect(g); g.connect(M.master);
    osc.start(start); osc.stop(start + 0.20);
  }

  // ─── Public: start looping background music ───────────────────
  function startQuizMusic(chapterNum){
    if (!musicPref()) return;
    if (!ensureAudio()) return;
    if (M.ctx.state === 'suspended') M.ctx.resume().catch(()=>{});
    try {
      M.master.gain.cancelScheduledValues(M.ctx.currentTime);
      M.master.gain.setValueAtTime(0.13, M.ctx.currentTime);
    } catch(e){}
    const track = pickTrack(chapterNum);
    if (!track) return;
    M.track = track;
    M.active = true;
    M.nextTime = M.ctx.currentTime + 0.12;
    const beatDur = 60 / track.bpm;
    let melIdx = 0, bassIdx = 0;
    let melPhase = 0, bassPhase = 0;

    const tick = () => {
      if (!M.active) return;
      const horizon = M.ctx.currentTime + 2.2;
      let t = M.nextTime;
      let safety = 256;
      while (t < horizon && safety-- > 0){
        if (melPhase === 0){
          const [p, d] = track.mel[melIdx];
          if (p >= 0) scheduleTone(midiHz(p), t, Math.max(0.05, d * beatDur * 0.95), track.lead);
        }
        if (bassPhase === 0){
          const [p, d] = track.bass[bassIdx];
          if (p >= 0) scheduleTone(midiHz(p - 12), t, Math.max(0.05, d * beatDur * 0.95), track.bassV);
        }
        melPhase++;
        if (melPhase >= track.mel[melIdx][1]){ melPhase = 0; melIdx = (melIdx + 1) % track.mel.length; }
        bassPhase++;
        if (bassPhase >= track.bass[bassIdx][1]){ bassPhase = 0; bassIdx = (bassIdx + 1) % track.bass.length; }
        t += beatDur;
      }
      M.nextTime = t;
      M.tickHandle = setTimeout(tick, 250);
    };
    tick();
    updateMusicBtn();
  }

  // ─── Public: stop with smooth fade ────────────────────────────
  function stopQuizMusic(fast){
    M.active = false;
    if (M.tickHandle){ clearTimeout(M.tickHandle); M.tickHandle = null; }
    if (M.master && M.ctx){
      const t = M.ctx.currentTime;
      const cur = M.master.gain.value;
      const fadeDur = fast ? 0.5 : 0.8;
      try {
        M.master.gain.cancelScheduledValues(t);
        M.master.gain.setValueAtTime(cur, t);
        M.master.gain.linearRampToValueAtTime(0, t + fadeDur);
        setTimeout(() => { if (M.master) M.master.gain.setValueAtTime(0.13, M.ctx.currentTime); }, fadeDur * 1000 + 50);
      } catch(e){}
    }
  }

  // ─── Public: result-screen chime, tiered by score ─────────────
  function playQuizResultChime(pct){
    if (!musicPref()) return;
    if (!ensureAudio()) return;
    if (M.ctx.state === 'suspended') M.ctx.resume().catch(()=>{});
    const t0 = M.ctx.currentTime + 0.2;
    let pattern;
    if (pct >= 80){
      pattern = [[72,0],[76,0.08],[79,0.16],[84,0.28], [79,0.50,0.7],[84,0.65,0.8], [88,0.85,0.6]];
    } else if (pct >= 60){
      pattern = [[67,0],[72,0.14],[76,0.30,0.85]];
    } else {
      pattern = [[64,0],[67,0.22,0.7]];
    }
    const chimeVoice = { osc:'triangle', atk:0.010, peak:0.32 };
    pattern.forEach(([midi, off, scale]) => {
      const peak = (scale != null ? scale : 1) * chimeVoice.peak;
      const dur = 0.7;
      const start = t0 + off;
      const osc = M.ctx.createOscillator();
      const g = M.ctx.createGain();
      osc.type = chimeVoice.osc;
      osc.frequency.setValueAtTime(midiHz(midi), start);
      g.gain.setValueAtTime(0, start);
      g.gain.linearRampToValueAtTime(peak, start + chimeVoice.atk);
      g.gain.linearRampToValueAtTime(0, start + dur);
      osc.connect(g);
      g.connect(M.master);
      osc.start(start);
      osc.stop(start + dur + 0.02);
    });
    if (pct >= 80){
      scheduleKick(t0 + 0.02);
      [91, 93, 96].forEach((midi, i) => {  // 3 sparkle notes (was 4) — less harsh
        const start = t0 + 0.7 + i * 0.08;
        const osc = M.ctx.createOscillator();
        const g = M.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(midiHz(midi), start);
        g.gain.setValueAtTime(0, start);
        g.gain.linearRampToValueAtTime(0.14, start + 0.010);
        g.gain.linearRampToValueAtTime(0, start + 0.35);
        osc.connect(g); g.connect(M.master);
        osc.start(start); osc.stop(start + 0.36);
      });
    }
  }

  // ─── Floating music toggle button (auto-injected) ─────────────
  function injectMusicBtn(){
    if (document.getElementById('vivaanMusicBtn')) return;
    const btn = document.createElement('button');
    btn.id = 'vivaanMusicBtn';
    btn.type = 'button';
    btn.setAttribute('aria-pressed', musicPref() ? 'true' : 'false');
    btn.title = musicPref() ? 'Music on — tap to mute' : 'Music off — tap to play';
    btn.textContent = musicPref() ? '🎵' : '🔇';
    Object.assign(btn.style, {
      position:'fixed', top:'12px', right:'12px',
      width:'44px', height:'44px', borderRadius:'50%',
      border:'2px solid #2B1B4A', background:'#FFF',
      fontSize:'20px', lineHeight:'1', cursor:'pointer',
      boxShadow:'0 3px 0 #2B1B4A, 0 8px 18px rgba(43,27,74,0.18)',
      zIndex:'9999', userSelect:'none', padding:'0',
      display:'flex', alignItems:'center', justifyContent:'center'
    });
    btn.addEventListener('click', () => {
      const newPref = !musicPref();
      setMusicPref(newPref);
      if (newPref) {
        // Resume — restart the current chapter's track.
        const ch = currentChapterNum();
        startQuizMusic(ch);
      } else {
        stopQuizMusic(true);
      }
      updateMusicBtn();
    });
    document.body.appendChild(btn);
  }
  function updateMusicBtn(){
    const btn = document.getElementById('vivaanMusicBtn');
    if (!btn) return;
    const on = musicPref();
    btn.textContent = on ? '🎵' : '🔇';
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.title = on
      ? 'Music on (' + ((M.track && M.track.name) || 'loop') + ') — tap to mute'
      : 'Music off — tap to play';
    btn.style.opacity = on ? '1' : '0.65';
  }

  // ─── Chapter number from CHAPTER.key (e.g. "ch7" → 7) ─────────
  function currentChapterNum(){
    try {
      const k = (typeof window.CHAPTER === 'object' && window.CHAPTER) ? window.CHAPTER.key : null;
      const m = (k || '').match(/(\d+)/);
      return m ? parseInt(m[1], 10) : 1;
    } catch(e){ return 1; }
  }

  // ─── Boot: inject button + arm a one-shot first-interaction
  //          handler so audio starts on first tap (browser policy). ─
  function boot(){
    injectMusicBtn();
    // The CHAPTER constant in math-chN.html is declared with `const` at
    // the top-level <script> — `const` does NOT bind on `window` (unlike
    // `var`), so window.CHAPTER is undefined. We sniff the chapter from
    // the URL filename instead, falling back to 1.
    let ch = currentChapterNum();
    if (ch === 1){
      const m = (location.pathname || '').match(/math-ch(\d+)\.html/i);
      if (m) ch = parseInt(m[1], 10);
    }
    const onFirstInteract = () => {
      window.removeEventListener('pointerdown', onFirstInteract, true);
      window.removeEventListener('keydown', onFirstInteract, true);
      window.removeEventListener('touchstart', onFirstInteract, true);
      startQuizMusic(ch);
    };
    window.addEventListener('pointerdown', onFirstInteract, true);
    window.addEventListener('keydown', onFirstInteract, true);
    window.addEventListener('touchstart', onFirstInteract, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Expose for quiz-engine.js + manual control
  window.startQuizMusic = startQuizMusic;
  window.stopQuizMusic  = stopQuizMusic;
  window.playQuizResultChime = playQuizResultChime;
  window.__vivaanMusicChapter = currentChapterNum;
})();
