// here we are taking row and col
// then making an arr of length rows
// and adding arr of length row and of elements col

function arr(row, col) {
  let arr = Array(row).fill(0);
  for (let i = 0; i < row; i++) {
    arr[i] = Array(col).fill(0);
  }
  return arr;
}

console.log(arr(6, 5)); 
