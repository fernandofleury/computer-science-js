const suite = require('benchmark').Suite();
const mixin = require('../../benchmark/mixin');

const twoSums = require('./index');
const arr = [1, 2, 3, 4, 5, 6, 7, 8, -12, 9, 21];
const sum = 9;

module.exports = mixin(suite)
  .add('twoSums#map', () => twoSums.map(arr, 9))
  .add('twoSums#set', () => twoSums.set(arr, 9))
  .add('twoSums#hashTable', () => twoSums.hashTable(arr, 9))
  .add('twoSums#arrIndexOf', () => twoSums.arrIndexOf(arr, 9))
  .add('twoSums#strIndexOf', () => twoSums.strIndexOf(arr, 9));
