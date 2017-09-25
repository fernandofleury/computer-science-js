// O(n) linear
const meanMedianMode = arr => {
  const sortedArr = arr.sort((a, b) => a - b);
  return {
    mean: mean(sortedArr),
    median: median(sortedArr),
    mode: mode(sortedArr)
  };
};

const mean = arr => arr.reduce((acc, num) => acc + num, 0) / arr.length;
const median = arr => {
  const length = arr.length;
  const half = Math.floor(length / 2);

  return length % 2 ? arr[half] : (arr[half - 1] + arr[half]) / 2;
};
const mode = arr => {
  const map = arr.reduce((map, num) => {
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
