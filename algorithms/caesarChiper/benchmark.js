const suite = require('benchmark').Suite();
const mixin = require('../../benchmark/mixin');

const caesarChiper = require('./index');
const str = 'foo bar';
const mod = 2;

module.exports = mixin(suite)
  .add('caesarChiper#replaceCharCode', () =>
    caesarChiper.replaceCharCode(str, mod)
  )
  .add('caesarChiper#loopShift', () => caesarChiper.loopShift(str, mod))
  .add('caesarChiper#loopCharCode', () => caesarChiper.loopCharCode(str, mod));
