// maze path problem in javascript
// problem is to find the path from given position to bottom right of a maze

function f(i, j, n, m) {
  // base case
  if (i === n - 1 && j === m - 1) {
    return 1;
  }
  if (i >= n || j >= m) {
    return 0;
  }
  // assumption

  return f(i + 1, j, n, m) + f(i, j + 1, n, m);
}

console.log(f(0, 0, 3, 3));
