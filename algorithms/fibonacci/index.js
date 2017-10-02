// O(n) linear
const forLoop = val => {
  let current = 0;
  let next = 1;
  let placeholder;

  for (let i = 0; i < val; i++) {
    placeholder = current + next;
    current = next;
    next = placeholder;

    // using destructuring is way less performatic:
    // [current, next] = [next, current + next];
  }

  return current;
};

// O(2^n) exponential
const recursive = (val = null, current = 0, next = 1) =>
  val > 0 ? recursive(val - 1, next, current + next) : current;

module.exports = {
  forLoop,
  recursive
};
