// print col in wave direction
function printRowWise(arr, column, row) {
  let print = [];
  for (let col = 0; col < column; col++) {
    if (col % 2 == 0) {
      // printing even col up to down
      let printArr = [];
      for (let row = 0; row < arr.length; row++) {
        printArr.push(arr[row][col]);
      }
      print.push(printArr);
    } else {
      // printing odd col down to up
      let printArr = [];
      for (let row = arr.length - 1; row >= 0; row--) {
        printArr.push(arr[row][col]);
      }
      print.push(printArr);
    }
  }

  console.log(print);
}

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

printRowWise(arr, 4, 3);
