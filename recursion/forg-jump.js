function f(i, n, heights) {
  if (i === n) return 0;
  if ((i = n - 1))
    return Math.abs(heights[i] - heights[i + 1]) + f(i + 1, n, heights);
  if (i > n) return Infinity;

  let minPlus1 = Math.abs(heights[i] - heights[i + 1]) + f(i + 1, n, heights);
  let minPlus2 = Math.abs(heights[i] - heights[i + 2]) + f(i + 2, n, heights);

  return Math.min(minPlus1, minPlus2);
}

console.log(f(0, 3, [undefined, 10, 30, 40, 20]));
