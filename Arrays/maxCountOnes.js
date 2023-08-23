let arr = [4, 3, 2, 7, 7, 2, 3, 1];
// arr values range in [1,n.length];
// finding missing values in an array sequence
function missingValues(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    let arrVal = Math.abs(arr[i]);
    if (arr[arrVal - 1] > 0) {
      arr[arrVal - 1] = -arr[arrVal - 1];
    }
  }
  console.log(arr);

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== -Math.abs(arr[j])) {
      output.push(j + 1);
    }
  }
  console.log(output);
}

missingValues(arr);
