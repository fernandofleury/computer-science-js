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

### Benchmark samples
```
isPalindrome#reverse x 1,547,945 ops/sec ±1.52% (92 runs sampled)
isPalindrome#halfLoop x 4,945,544 ops/sec ±1.00% (90 runs sampled)
Fastest is isPalindrome#halfLoop

caesarChiper#replaceCharCode x 920,884 ops/sec ±0.55% (86 runs sampled)
caesarChiper#loopShift x 1,104,463 ops/sec ±1.20% (93 runs sampled)
caesarChiper#loopCharCode x 1,953,852 ops/sec ±2.32% (87 runs sampled)
Fastest is caesarChiper#loopCharCode

reverseWords#map x 1,290,145 ops/sec ±1.74% (90 runs sampled)
reverseWords#sort x 995,624 ops/sec ±0.87% (90 runs sampled)
reverseWords#forSwap x 2,287,363 ops/sec ±1.16% (93 runs sampled)
Fastest is reverseWords#forSwap

reverseArrayInPlace#destructuring x 17,117,084 ops/sec ±0.81% (91 runs sampled)
reverseArrayInPlace#placeholder x 55,956,832 ops/sec ±0.83% (89 runs sampled)
Fastest is reverseArrayInPlace#placeholder
```
