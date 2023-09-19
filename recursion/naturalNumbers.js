function f(n) {
  // #base case
  if (n < 1) {
    return;
  }

  // # assumption f(n) is correct for f(n-1)
  f(n - 1);
  console.log(n);
}
f(5);
