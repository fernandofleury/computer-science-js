// O(log n) logarithmic
const binarySearch = (arr, value) => {
  let min = 0;
  let max = arr.length - 1;
  let mid;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);

    if (arr[mid] === value) {
      return mid;
    }

    if (arr[mid] < value) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return -1;
};

module.exports = binarySearch;
