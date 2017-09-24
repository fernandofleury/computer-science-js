const suite = require('benchmark').Suite();
const mixin = require('../../benchmark/mixin');

const reverseArrayInPlace = require('./index');
const arr = [1, 2, 3, 4, 5, 6, 7];

module.exports = mixin(suite)
  .add('reverseArrayInPlace#destructuring', () =>
    reverseArrayInPlace.destructuring(arr)
  )
  .add('reverseArrayInPlace#placeholder', () =>
    reverseArrayInPlace.placeholder(arr)
  );
