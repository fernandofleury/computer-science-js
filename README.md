# JS Structures
Application of JavaScript Algorithms/Data Structures with proper spec/benchmark of variations.

## Executing the specs
`npm test`

## Executing the benchmarks
`npm run benchmark`

## Algorithms
- [fizzBuzz](algorithms/fizzBuzz/)
- [ransomNote](algorithms/ransomNote/)
- [isPalindrome](algorithms/isPalindrome/)
- [caesarChiper](algorithms/caesarChiper/)
- [reverseWords](algorithms/reverseWords/)
- [reverseArrayInPlace](algorithms/reverseArrayInPlace/)
- [meanMedianMode](algorithms/meanMedianMode/)

### Benchmark samples
```
fizzBuzz#ternary x 4,807,373 ops/sec ±0.88% (90 runs sampled)
fizzBuzz#ifElse x 4,777,387 ops/sec ±0.66% (90 runs sampled)
Fastest is fizzBuzz#ternary

isPalindrome#reverse x 1,571,786 ops/sec ±0.45% (92 runs sampled)
isPalindrome#halfLoop x 5,018,779 ops/sec ±0.78% (91 runs sampled)
Fastest is isPalindrome#halfLoop

caesarChiper#replaceCharCode x 873,078 ops/sec ±2.84% (91 runs sampled)
caesarChiper#loopShift x 1,090,754 ops/sec ±1.43% (90 runs sampled)
caesarChiper#loopCharCode x 1,796,884 ops/sec ±2.97% (82 runs sampled)
Fastest is caesarChiper#loopCharCode

reverseWords#map x 1,269,155 ops/sec ±1.33% (87 runs sampled)
reverseWords#sort x 972,312 ops/sec ±0.87% (85 runs sampled)
reverseWords#forSwap x 2,262,055 ops/sec ±1.08% (93 runs sampled)
Fastest is reverseWords#forSwap

reverseArrayInPlace#destructuring x 16,685,000 ops/sec ±1.14% (87 runs sampled)
reverseArrayInPlace#placeholder x 55,174,862 ops/sec ±1.51% (88 runs sampled)
Fastest is reverseArrayInPlace#placeholder
```
