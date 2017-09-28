// O(n) linear
const map = (arr, sum) => {
  const values = new Map();
  let result = [];

  for (let i = 0; i <= arr.length; i++) {
    let value = arr[i];

    if (values.has(sum - value)) {
      result.push([value, sum - value]);
    }

    if (!values.has(value)) {
      values.set(value);
    }
  }

  return result;
};

// O(n) linear
const set = (arr, sum) => {
  const values = new Set();
  let result = [];

  for (let i = 0; i <= arr.length; i++) {
    let value = arr[i];

    if (values.has(sum - value)) {
      result.push([value, sum - value]);
    }

    if (!values.has(value)) {
      values.add(value);
    }
  }

  return result;
};

// O(n) linear
const hashTable = (arr, sum) => {
  const values = {};
  let result = [];

  for (let i = 0; i <= arr.length; i++) {
    let value = arr[i];

    if (values[sum - value]) {
      result.push([value, sum - value]);
    }

    if (!values[value]) {
      values[value] = 1;
    }
  }

  return result;
};

// O(n^2) quadratic
const arrIndexOf = (arr, sum) => {
  const values = [];
  let result = [];

  for (let i = 0; i <= arr.length; i++) {
    let value = arr[i];

    if (values.indexOf(sum - value) !== -1) {
      result.push([value, sum - value]);
    }

    if (values.indexOf(value) === -1) {
      values.push(value);
    }
  }

  return result;
};

// O(n^2) quadratic
const strIndexOf = (arr, sum) => {
  let values = '';
  let result = [];

  for (let i = 0; i <= arr.length; i++) {
    let value = arr[i];

    if (values.indexOf(sum - value) !== -1) {
      result.push([value, sum - value]);
    }

    if (values.indexOf(value) === -1) {
      values += value;
    }
  }

  return result;
};

module.exports = {
  map,
  set,
  hashTable,
  arrIndexOf,
  strIndexOf
};
