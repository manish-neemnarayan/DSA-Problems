function f(n) {
  // #Base Case
  if (n === 0 || n === 1) {
    return n;
  }

  // #Assumption f(n-1) + f(n-2) = f(n)
  return f(n - 1) + f(n - 2);
}

console.log(f(6));
