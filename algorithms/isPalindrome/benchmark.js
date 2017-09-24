const suite = require('benchmark').Suite();
const mixin = require('../../benchmark/mixin');

const isPalindrome = require('./index');
const str = 'racecar';

module.exports = mixin(suite)
  .add('isPalindrome#reverse', () => isPalindrome.reverse(str))
  .add('isPalindrome#halfLoop', () => isPalindrome.halfLoop(str));
