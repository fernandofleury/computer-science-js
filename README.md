# Computer Science in JavaScript
Computer Science studies in JavaScript with proper specs/benchmarking.

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
- [twoSums](algorithms/twoSums/)
- [binarySearch](algorithms/binarySearch/)
- [bubbleSort](algorithms/bubbleSort/)
- [mergeSort](algorithms/mergeSort/)
- [maxStockProfit](algorithms/maxStockProfit/)
- [quickSort](algorithms/quickSort/)
- [insertionSort](algorithms/insertionSort/)
- [insertionSort](algorithms/insertionSort/)
- [selectionSort](algorithms/selectionSort/)

## Structures
- [linkedList](structures/linkedList/)
- [stack](structures/stack/)
- [queue](structures/queue/)
- [set](structures/set/)
- [map](structures/map/)

### Benchmark samples
```
fizzBuzz#ternary x 4,558,955 ops/sec ±2.61% (87 runs sampled)
fizzBuzz#ifElse x 4,645,508 ops/sec ±3.05% (91 runs sampled)
Fastest is fizzBuzz#ifElse,fizzBuzz#ternary

isPalindrome#reverse x 1,410,752 ops/sec ±3.56% (82 runs sampled)
isPalindrome#halfLoop x 5,058,019 ops/sec ±0.77% (93 runs sampled)
Fastest is isPalindrome#halfLoop

caesarChiper#replaceCharCode x 909,579 ops/sec ±1.16% (92 runs sampled)
caesarChiper#loopShift x 1,075,434 ops/sec ±1.69% (87 runs sampled)
caesarChiper#loopCharCode x 1,932,081 ops/sec ±1.24% (87 runs sampled)
Fastest is caesarChiper#loopCharCode

reverseWords#map x 1,305,493 ops/sec ±1.09% (90 runs sampled)
reverseWords#sort x 979,935 ops/sec ±1.03% (88 runs sampled)
reverseWords#forSwap x 2,271,205 ops/sec ±1.08% (92 runs sampled)
Fastest is reverseWords#forSwap

reverseArrayInPlace#destructuring x 17,328,113 ops/sec ±1.01% (91 runs sampled)
reverseArrayInPlace#placeholder x 56,679,342 ops/sec ±0.68% (94 runs sampled)
Fastest is reverseArrayInPlace#placeholder

twoSums#map x 680,438 ops/sec ±0.74% (93 runs sampled)
twoSums#set x 765,816 ops/sec ±1.00% (93 runs sampled)
twoSums#hashTable x 510,519 ops/sec ±0.99% (92 runs sampled)
twoSums#arrIndexOf x 1,451,189 ops/sec ±7.72% (83 runs sampled)
twoSums#strIndexOf x 381,697 ops/sec ±7.15% (72 runs sampled)
Fastest is twoSums#arrIndexOf

fibonacci#forLoop x 4,064,113 ops/sec ±0.61% (90 runs sampled)
fibonacci#recursive x 532,014 ops/sec ±0.79% (90 runs sampled)
Fastest is fibonacci#forLoop
```
