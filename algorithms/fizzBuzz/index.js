// O(n) linear
const forLoop = number => {
  for (let i = 0; i <= number; i++) {
    let f = i % 3 == 0,
      b = i % 5 == 0;
    // console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
  }
};

// O(n) linear
const forEach = numberArr => {
  numberArr.forEach(i => {
    let f = i % 3 == 0,
      b = i % 5 == 0;
    // console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
  });
};

module.exports = {
  forLoop,
  forEach
};
