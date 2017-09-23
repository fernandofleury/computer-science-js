const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const caesarChiper = require('./index');
const str = 'foo bar';
const mod = 2;

module.exports = {
  benchmark: () => {
    suite
      .add('caesarChiper#replaceCharCode', function() {
        caesarChiper.replaceCharCode(str, mod);
      })
      .add('caesarChiper#loopShift', function() {
        caesarChiper.loopShift(str, mod);
      })
      .add('caesarChiper#loopCharCode', function() {
        caesarChiper.loopCharCode(str, mod);
      })
      .on('cycle', function(event) {
        console.log(String(event.target));
      })
      .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
      })
      .run({ async: true });
  }
};
