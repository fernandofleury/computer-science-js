const suite = require('benchmark').Suite();
const mixin = require('../../benchmark/mixin');

const fizzBuzz = require('./index');
const num = 15;

module.exports = mixin(suite)
  .add('fizzBuzz#ternary', () => fizzBuzz.ternary(num))
  .add('fizzBuzz#ifElse', () => fizzBuzz.ifElse(num));
