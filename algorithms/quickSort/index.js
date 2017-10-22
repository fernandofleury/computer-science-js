// ‎O(n log n) average
const quickSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];
  const length = arr.length;
  let lesser = [];
  let greater = [];
  let current;

  for (let i = 1; i < length; i++) {
    current = arr[i];
    current < pivot ? lesser.push(current) : greater.push(current);
  }

  return [...quickSort(lesser), pivot, ...quickSort(greater)];
};

module.exports = quickSort;
