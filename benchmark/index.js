const getBenchmark = file => require(`../algorithms/${file}/benchmark`);

getBenchmark('fizzBuzz').run();
getBenchmark('isPalindrome').run();
getBenchmark('caesarChiper').run();
getBenchmark('reverseWords').run();
getBenchmark('reverseArrayInPlace').run();
getBenchmark('twoSums').run();
