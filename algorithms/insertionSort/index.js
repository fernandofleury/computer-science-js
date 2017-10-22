// O(n^2) average
const insertionSort = arr => {
  const length = arr.length;
  let result = [];
  let current;

  for (let i = 0; i < length; i++) {
    current = arr[i];

    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};

module.exports = insertionSort;
