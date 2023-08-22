function arr(col, row) {
  let arr = Array(col).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Array(row).fill(0);
  }
  return arr;
}

console.log(arr(6, 5));
