const normalizeStr = str => str.replace(/[^0-9a-z]/gi, '').toLowerCase();

// O(n) linear
const reverse = str => {
  const normalizedStr = normalizeStr(str);
  return (
    normalizedStr ===
    normalizedStr
      .split('')
      .reverse()
      .join('')
  );
};

// O(log n) logarithm
const KISS = str => {
  const normalizedStr = normalizeStr(str);
  const len = Math.floor(normalizedStr.length / 2);
  for (let i = 0; i < len; i++) {
    if (normalizedStr[i] !== normalizedStr[normalizedStr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

module.exports = {
  reverse,
  KISS
};
