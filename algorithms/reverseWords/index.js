// O(n) linear
const map = str =>
  str
    .split('')
    .map((item, index, arr) => arr[arr.length - index - 1])
    .join('');

// O(n) linear
const sort = str =>
  str
    .split('')
    .sort(() => 1)
    .join('');

// O(n) linear
const forSwap = str => {
  let result = [];
  let arr = str.split('');
  let length = arr.length;

  for (let i = length - 1; i >= 0; i -= 1) {
    result.push(arr[i]);
  }
  return result.join('');
};

module.exports = {
  map,
  sort,
  forSwap
};
