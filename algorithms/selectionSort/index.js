// O (n^2)
const selectionSort = arr => {
  const length = arr.length;
  let min;

  for (let i = 0; i < length; i++) {
    min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
};

module.exports = selectionSort;
