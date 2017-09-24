const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const reverseWords = require('./index');
const str = 'foo bar';

module.exports = {
  benchmark: () => {
    suite
      .add('reverseWords#map', function() {
        reverseWords.map(str);
      })
      .add('reverseWords#sort', function() {
        reverseWords.sort(str);
      })
      .add('reverseWords#forSwap', function() {
        reverseWords.forSwap(str);
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
