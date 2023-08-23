let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

function printRowWise(arr, col, row) {
  console.log(arr);

  for (let j = 0; j < col; j++) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i][j]);
    }
  }
}

printRowWise(arr, 4, 3);
