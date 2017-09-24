const suite = require('benchmark').Suite();
const mixin = require('../../benchmark/mixin');

const reverseWords = require('./index');
const str = 'foo bar';

module.exports = mixin(suite)
  .add('reverseWords#map', () => reverseWords.map(str))
  .add('reverseWords#sort', () => reverseWords.sort(str))
  .add('reverseWords#forSwap', () => reverseWords.forSwap(str));
