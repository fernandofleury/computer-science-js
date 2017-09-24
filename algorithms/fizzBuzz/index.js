// O(n) linear
const ternary = number => {
  let result = '';
  for (let i = 0; i <= number; i++) {
    let f = i % 3 == 0;
    let b = i % 5 == 0;
    result += f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i;
  }

  return result;
};

// O(n) linear
const ifElse = number => {
  let result = '';
  for (let i = 0; i <= number; i++) {
    if (i % 15 == 0) result += 'FizzBuzz';
    else if (i % 3 == 0) result += 'Fizz';
    else if (i % 5 == 0) result += 'Buzz';
    else result += i;
  }

  return result;
};

module.exports = {
  ternary,
  ifElse
};
