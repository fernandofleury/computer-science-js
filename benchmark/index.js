const getBenchmark = file => require(`../algorithms/${file}/benchmark`);

getBenchmark('isPalindrome').run();
getBenchmark('caesarChiper').run();
getBenchmark('reverseWords').run();
getBenchmark('reverseArrayInPlace').run();
