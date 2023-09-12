function f(n) {
  // 1. base case
  if (n === 1) {
    return 1;
  }

  // 2. Assumption
  // 3. Recusive step
  return n * f(n - 1);
}

console.log(f(5));

// class based
// problem on GFG
class Solution {
  factorial(n) {
    // 1. base case
    if (n === 1) {
      return 1;
    }

    // 2. Assumption
    // 3. Self work/ Recursive step
    return n * factorial(n - 1);
  }
}
