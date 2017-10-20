// O(n^2) (worst case) O(n) (best case)
const bubbleSort = arr => {
  let placeholder;

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        placeholder = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = placeholder;
      }
    }
  }

  return arr;
};

module.exports = bubbleSort;
