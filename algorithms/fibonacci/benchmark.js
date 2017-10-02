const suite = require('benchmark').Suite();
const mixin = require('../../benchmark/mixin');

const fibonacci = require('./index');
const val = 200;

module.exports = mixin(suite)
  .add('fibonacci#forLoop', () => fibonacci.forLoop(val))
  .add('fibonacci#recursive', () => fibonacci.recursive(val));
