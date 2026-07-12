// Picks the best 1-4 facts for a given day/month from DWN_DATA to feature on a wish card.
function dwnStripTags(s) {
  return s.replace(/<[^>]+>/g, '');
}

function dwnLookup(day, month) {
  for (const [d, m, facts] of DWN_DATA) {
    if (d === day && m === month) return facts;
  }
  return null;
}

function dwnMergeFacts(facts) {
  const merged = [];
  for (const raw of facts) {
    const plain = dwnStripTags(raw).trim();
    const isBareNumber = /^[\d,]+$/.test(plain);
    const isParenOnly = /^\(.*\)$/.test(plain);
    const isShortAside = plain.length <= 20 && !/\d/.test(plain) && merged.length > 0;
    if ((isBareNumber || isParenOnly || isShortAside) && merged.length > 0) {
      merged[merged.length - 1] += (isBareNumber ? ', ' : ' — ') + raw;
    } else {
      merged.push(raw);
    }
  }
  return merged;
}

function dwnScoreFact(raw) {
  const plain = dwnStripTags(raw).trim();
  let score = 0;
  if (plain.includes('=')) score += 3;
  const len = plain.length;
  if (len >= 15 && len <= 90) score += 2;
  else if (len > 140) score -= 3;
  else if (len > 90) score -= 1;
  if (/prime|palindrome|perfect square|friedman|\bpi\b|pie\b/i.test(plain)) score += 1;
  if (/^\(/.test(plain)) score -= 2;
  if (/birthdate/i.test(plain)) score += 2;
  if (/^(when|the number|square of|cube.?root|product of digits)/i.test(plain)) score -= 1;
  if (plain.includes('...')) score -= 4;
  return score;
}

// Returns the best contiguous run of facts (2-4 preferred) as an array of HTML strings.
function dwnPickBest(facts) {
  const merged = dwnMergeFacts(facts);
  if (merged.length === 0) return [];
  const scores = merged.map(dwnScoreFact);
  let best = { score: -Infinity, start: 0, size: 1 };
  for (const size of [3, 2, 4, 1]) {
    for (let start = 0; start + size <= merged.length; start++) {
      const windowFacts = merged.slice(start, start + size);
      const totalLen = windowFacts.reduce((a, f) => a + dwnStripTags(f).length, 0);
      if (totalLen > 260) continue;
      let totalScore = 0;
      for (let i = 0; i < size; i++) totalScore += scores[start + i];
      totalScore -= start * 0.15; // book front-loads its strongest facts
      totalScore -= size * 0.05; // slight preference for tighter windows on ties
      if (totalScore > best.score) {
        best = { score: totalScore, start, size };
      }
    }
  }
  return merged.slice(best.start, best.start + best.size);
}

// Public entry point: day (1-31), month (1-12) -> { headline, facts: [html,...] } or null
function getDwnEquation(day, month) {
  const facts = dwnLookup(day, month);
  if (!facts) return null;
  return dwnPickBest(facts);
}
