const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const isPalindrome = require('./index');
const str = 'racecar';

module.exports = {
  benchmark: () => {
    suite
      .add('isPalindrome#reverse', function() {
        isPalindrome.reverse(str);
      })
      .add('isPalindrome#KISS', function() {
        isPalindrome.KISS(str);
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
