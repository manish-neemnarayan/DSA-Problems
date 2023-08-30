let arr = [
  [2, 4, -1],
  [-10, 5, 11],
  [18, -7, 6],
];

// 1. method
// print col up to down
// in this method we are creating a new matrix
// function printRowWise(arr, column, rowCount) {
//   let print = [];
//   for (let col = 0; col < column; col++) {
//     let printArr = [];
//     for (let row = 0; row < rowCount; row++) {
//       printArr.push(arr[row][col]);
//     }
//     print.push(printArr);
//   }

//   console.log(print);
// }

// printRowWise(arr, 4, 5);

// 2. method by modifying the original matrix itself, it will work only for square matrix
function printMatrix(arr, column, rowCount) {
  for (let row = 0; row < column; row++) {
    for (let col = 0; col < column; col++) {
      if (row !== col) {
        let temp = arr[row][col];
        arr[row][col] = arr[col][row];
        arr[col][row] = temp;
      }
    }
  }

  console.log(arr);
}

printMatrix(arr, 3, 3);
