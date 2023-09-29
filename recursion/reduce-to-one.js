/**
 * Problem: find the minimum steps to reach to 1 where you can apply three operations:
 *   1. n/2 if n%2 == 0
 *   2. n/3 if n%3 == 0
 *   3. n-1
 */

function f(n) {
  // Base Case
  if (n === 1) {
    return 0;
  }
  if (n < 1) {
    return Infinity;
  }

  // Assumption
  let count = 1 + f(n - 1);

  if (n % 2 === 0) {
    count = Math.min(count, 1 + f(n / 2));
  }

  if (n % 3 === 0) {
    count = Math.min(count, 1 + f(n / 3));
  }

  return count;
}

console.log(f(4));
