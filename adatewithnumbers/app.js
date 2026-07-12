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
  const cardOccasionEl = document.getElementById('card-occasion');
  const cardNameEl = document.getElementById('card-name');
  const cardIntroEl = document.getElementById('card-equation-intro');
  const cardFactsEl = document.getElementById('card-equation-facts');
  const cardFromEl = document.getElementById('card-from');

  const btnDownload = document.getElementById('btn-download');
  const btnShare = document.getElementById('btn-share');
  const btnAgain = document.getElementById('btn-again');

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

    cardOccasionEl.textContent = occasion;
    cardNameEl.textContent = toName + '!';
    cardIntroEl.textContent = `Your date, ${day}/${month}, written as ${ddm}, is one-of-a-kind:`;
    cardFactsEl.innerHTML = '';
    (facts || []).forEach((html) => {
      const li = document.createElement('li');
      li.innerHTML = html;
      cardFactsEl.appendChild(li);
    });
    cardFromEl.textContent = fromName ? `— with love, ${fromName}` : '';
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
    const canvas = await html2canvas(cardEl, {
      scale: 2,
      backgroundColor: null,
      useCORS: true,
    });
    return new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
  }

  function fileNameFor() {
    const toName = (toNameEl.value.trim() || 'wish').replace(/[^a-z0-9]+/gi, '-');
    return `a-date-with-numbers-${toName}.png`;
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
          title: 'A Date With Numbers',
          text: 'Made you a number-wish — check it out!',
        });
      } else {
        await navigator.share({ title: 'A Date With Numbers', text: 'Made you a number-wish!' });
      }
    } catch (err) {
      if (err && err.name !== 'AbortError') console.error(err);
    } finally {
      btnShare.disabled = false;
    }
  });
})();
