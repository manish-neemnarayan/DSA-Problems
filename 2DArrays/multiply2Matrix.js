
function printMatrix(a, m, n, b, n, k) {
  // 1. create a matrix of m x k, of two matrixs a: m, n and b: n, k (rows and columns)
    let arr = Array(m).fill(0);
    for (let i = 0; i < m; i++) {
      arr[i] = Array(k).fill(0);
    }

    // 2. fill the matrix*
    for( let i = 0; i < m; i++){
      for (let j = 0; j < k; j++){
        for( let x = 0; x < n; x++){
          arr[i][j] += a[i][x] * b[x][j];
        }
      }
    }

    console.log(arr);
}

// 66  72  78
// 156 171 186

let a = [[1, 2, 3], [4, 5, 6]];
let b = [[7, 8, 9], [10, 11, 12], [13, 14, 15]];
printMatrix(a, 2,3, b, 3,3);