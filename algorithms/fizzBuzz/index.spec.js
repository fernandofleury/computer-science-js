const assert = require('assert');
const fizzBuzz = require('./index');

describe('fizzBuzz', () => {
  describe('ternary', () => {
    it('should return fizz, buzz and fizzbuzz for 15 numbers', () => {
      const expectedData =
        'FizzBuzz12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz';
      assert.equal(fizzBuzz.ternary(15), expectedData);
    });
  });

  describe('ifElse', () => {
    it('should return fizz, buzz and fizzbuzz for 15 numbers', () => {
      const expectedData =
        'FizzBuzz12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz';
      assert.equal(fizzBuzz.ifElse(15), expectedData);
    });
  });
});
