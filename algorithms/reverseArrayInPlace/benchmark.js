const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const reverseArrayInPlace = require('./index');
const arr = [1, 2, 3, 4, 5, 6, 7];

module.exports = {
  benchmark: () => {
    suite
      .add('reverseArrayInPlace#destructuring', function() {
        reverseArrayInPlace.destructuring(arr);
      })
      .add('reverseArrayInPlace#placeholder', function() {
        reverseArrayInPlace.placeholder(arr);
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
