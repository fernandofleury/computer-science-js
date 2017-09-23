// O(n) linear
const replaceCharCode = (str, mod) =>
  str.replace(/[a-z]/gi, c => {
    const base = c === c.toUpperCase() ? 65 : 97;
    return String.fromCharCode((c.charCodeAt(0) - base + mod) % 26 + base);
  });

// O(n) linear
const loopShift = (str, mod) => {
  let lowerStr = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let result = '';
  let length = lowerStr.length;

  for (let i = 0; i < length; i++) {
    let currentLetter = lowerStr[i];
    if (currentLetter === ' ') {
      result += currentLetter;
    } else {
      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + mod % 26;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = newIndex + 26;
      if (str[i] === str[i].toUpperCase()) {
        result += alphabet[newIndex].toUpperCase();
      } else result += alphabet[newIndex];
    }
  }

  return result;
};

// O(n) linear
const loopCharCode = (str, mod) => {
  let result = '';
  let length = str.length;

  for (let i = 0; i < length; i++) {
    let c = str[i];
    if (c === ' ') {
      result += c;
    } else {
      const base = c === c.toUpperCase() ? 65 : 97;
      result += String.fromCharCode((c.charCodeAt(0) - base + mod) % 26 + base);
    }
  }

  return result;
};

module.exports = {
  replaceCharCode,
  loopShift,
  loopCharCode
};
