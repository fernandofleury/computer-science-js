// O(n) linear
const destructuring = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const reversedIndex = arr.length - i - 1;
    [arr[i], arr[reversedIndex]] = [arr[reversedIndex], arr[i]];
  }

  return arr;
};

// O(n) linear
const placeholder = arr => {
  const length = arr.length;
  let placeholder;

  for (var i = 0; i < length / 2; i++) {
    placeholder = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = placeholder;
  }

  return arr;
};

module.exports = {
  destructuring,
  placeholder
};
