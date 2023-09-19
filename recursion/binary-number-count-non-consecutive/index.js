function f(n) {
  // base case
  if (n == 0) {
    return 2;
  } else if (n == 1) {
    return 3;
  }

  // assumption f(n) is correct for f(n-1)
  return f(n - 1) + f(n - 2);
}

console.log(f(3));
