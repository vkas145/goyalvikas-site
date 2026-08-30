(function () {
  const dayEl = document.getElementById('day');
  const monthEl = document.getElementById('month');
  const occasionEl = document.getElementById('occasion');
  const occasionCustomEl = document.getElementById('occasion-custom');
  const toNameEl = document.getElementById('to-name');
  const fromNameEl = document.getElementById('from-name');
  const form = document.getElementById('wish-form');

  const formSection = document.getElementById('form-section');
  const resultSection = document.getElementById('result-section');
  const cardEl = document.getElementById('card');
  const cardTagEmojiEl = document.getElementById('card-tag-emoji');
  const cardTagTextEl = document.getElementById('card-tag-text');
  const cardLeadinEl = document.getElementById('card-leadin');
  const cardOccasionEl = document.getElementById('card-occasion');
  const cardNameEl = document.getElementById('card-name');
  const cardDatePlainEl = document.getElementById('card-date-plain');
  const cardDdmEl = document.getElementById('card-ddm');
  const cardIntroEl = document.getElementById('card-equation-intro');
  const cardFactsEl = document.getElementById('card-equation-facts');
  const cardFromEl = document.getElementById('card-from');

  const MONTH_NAMES = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Each preset occasion gets its own visual mood and a lead-in phrase that
  // reads naturally for that occasion (a birthday and a work anniversary
  // shouldn't be wished the same way).
  const OCCASION_THEMES = {
    'Birthday': { key: 'birthday', emoji: '🎂', leadin: 'Wishing you a very happy' },
    'Anniversary': { key: 'anniversary', emoji: '💞', leadin: 'Wishing you a very happy' },
    'Work Anniversary': { key: 'work', emoji: '🏆', leadin: 'Celebrating your' },
    'Engagement': { key: 'engagement', emoji: '💍', leadin: 'Congratulations on your' },
  };
  const DEFAULT_THEME = { key: 'other', emoji: '✨', leadin: 'Celebrating your' };

  function themeFor(occasionSelectValue) {
    return OCCASION_THEMES[occasionSelectValue] || DEFAULT_THEME;
  }

  const btnDownload = document.getElementById('btn-download');
  const btnWhatsapp = document.getElementById('btn-whatsapp');
  const btnInstagram = document.getElementById('btn-instagram');
  const btnFacebook = document.getElementById('btn-facebook');
  const btnShare = document.getElementById('btn-share');
  const btnAgain = document.getElementById('btn-again');
  const shareHintEl = document.getElementById('share-hint');

  const PAGE_URL = 'https://www.goyalvikas.com/adatewithnumbers';

  const DAYS_IN_MONTH = { 1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };

  function populateDays() {
    const month = parseInt(monthEl.value, 10) || 1;
    const max = DAYS_IN_MONTH[month];
    const prev = parseInt(dayEl.value, 10) || 0;
    dayEl.innerHTML = '';
    for (let d = 1; d <= max; d++) {
      const opt = document.createElement('option');
      opt.value = String(d);
      opt.textContent = String(d);
      dayEl.appendChild(opt);
    }
    if (prev >= 1 && prev <= max) dayEl.value = String(prev);
  }
  monthEl.addEventListener('change', populateDays);
  populateDays();

  // default to today's date
  const today = new Date();
  monthEl.value = String(today.getMonth() + 1);
  populateDays();
  dayEl.value = String(today.getDate());

  occasionEl.addEventListener('change', () => {
    occasionCustomEl.hidden = occasionEl.value !== 'Other';
    if (occasionEl.value === 'Other') occasionCustomEl.focus();
  });

  function currentOccasion() {
    if (occasionEl.value === 'Other') {
      return occasionCustomEl.value.trim() || 'Special Day';
    }
    return occasionEl.value;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const day = parseInt(dayEl.value, 10);
    const month = parseInt(monthEl.value, 10);
    const toName = toNameEl.value.trim();
    const fromName = fromNameEl.value.trim();
    const occasion = currentOccasion();

    if (!toName) {
      toNameEl.focus();
      return;
    }

    const facts = getDwnEquation(day, month);
    const ddm = String(day) + String(month);
    const theme = themeFor(occasionEl.value);

    cardEl.setAttribute('data-theme', theme.key);
    cardTagEmojiEl.textContent = theme.emoji;
    cardTagTextEl.textContent = occasion;
    cardLeadinEl.textContent = theme.leadin;
    cardOccasionEl.textContent = occasion;
    cardNameEl.textContent = toName + '!';
    cardDatePlainEl.textContent = `${day} ${MONTH_NAMES[month]}`;
    cardDdmEl.textContent = ddm;
    cardIntroEl.textContent = 'the numbers behind it:';
    cardFactsEl.innerHTML = '';
    const isBirthday = occasionEl.value === 'Birthday';
    (facts || []).forEach((html) => {
      const li = document.createElement('li');
      li.innerHTML = isBirthday ? html : html.replace(/\bbirthdate\b/gi, 'date');
      cardFactsEl.appendChild(li);
    });
    cardFromEl.textContent = fromName ? `— ${fromName}` : '';
    cardFromEl.style.display = fromName ? '' : 'none';

    formSection.hidden = true;
    resultSection.hidden = false;
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (navigator.share) btnShare.hidden = false;
  });

  btnAgain.addEventListener('click', () => {
    resultSection.hidden = true;
    formSection.hidden = false;
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  async function renderCardToBlob() {
    if (document.fonts && document.fonts.ready) {
      try { await document.fonts.ready; } catch (e) { /* ignore */ }
    }
    const canvas = await html2canvas(cardEl, {
      scale: 2,
      backgroundColor: null,
      useCORS: true,
    });
    return new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
  }

  function fileNameFor() {
    const toName = (toNameEl.value.trim() || 'wish').replace(/[^a-z0-9]+/gi, '-');
    return `number-wish-${toName}.png`;
  }

  btnDownload.addEventListener('click', async () => {
    btnDownload.disabled = true;
    const originalText = btnDownload.textContent;
    btnDownload.textContent = 'Preparing…';
    try {
      const blob = await renderCardToBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileNameFor();
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      alert('Could not generate the image. Please try again.');
      console.error(err);
    } finally {
      btnDownload.disabled = false;
      btnDownload.textContent = originalText;
    }
  });

  btnShare.addEventListener('click', async () => {
    btnShare.disabled = true;
    try {
      const blob = await renderCardToBlob();
      const file = new File([blob], fileNameFor(), { type: 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'A Number Wish',
          text: 'Made you a number-wish — check it out!',
        });
      } else {
        await navigator.share({ title: 'A Number Wish', text: 'Made you a number-wish!' });
      }
    } catch (err) {
      if (err && err.name !== 'AbortError') console.error(err);
    } finally {
      btnShare.disabled = false;
    }
  });
})();
