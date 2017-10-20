// ‎O(n log n) average
const split = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  return merge(split(arr.slice(0, middle)), split(arr.slice(middle)));
};

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }

  return [...result, ...left, ...right];
};

module.exports = split;
