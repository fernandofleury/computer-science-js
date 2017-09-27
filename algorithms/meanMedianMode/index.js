const sortArray = arr => arr.sort((a, b) => a - b);

// O(n) linear
const mean = arr => {
  const sortedArr = sortArray(arr);

  return arr.reduce((acc, num) => acc + num, 0) / arr.length;
};

// O(n) linear
const median = arr => {
  const sortedArr = sortArray(arr);
  const length = sortedArr.length;
  const half = Math.floor(length / 2);

  return length % 2
    ? sortedArr[half]
    : (sortedArr[half - 1] + sortedArr[half]) / 2;
};

// O(n) linear
const mode = arr => {
  const sortedArr = sortArray(arr);
  const map = sortedArr.reduce((map, num) => {
    map[num] = map[num] + 1 || 1;
    return map;
  }, {});

  let result = { key: 0, value: 0 };

  for (let key in map) {
    if (map[key] > result.value) {
      result = { key, value: map[key] };
    }
  }

  return result.key;
};

module.exports = {
  mean,
  median,
  mode
};
