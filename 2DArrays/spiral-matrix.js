function spiralMatrix(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    // grid: matrix, m: row, n: col
    // 1. start-row elemenation
    // 2. end-col elemenation
    // 3. end-row elemenation
    // 4. start-col elemenation

    let startRow = 0;
    let endRow = m - 1;
    let startCol = 0;
    let endCol = n - 1;

    let count = 0;
    let result = [];
    while(count < m*n + 1) {
        // 1...
        for( let x=startCol; x<=endCol; x++) {
            count += 1;
            result.push(matrix[startRow][x]);
        }
        startRow += 1;
        if (count == m*n) break;
        // 2.
        for( let x=startRow; x<=endRow; x++) {
            count += 1;
            result.push(matrix[x][endCol]);
        }
        endCol -= 1;
        if (count == m*n) break;

        // 3.
        for( let x=endCol; x>=startCol; x--) {
            count += 1;
            result.push(matrix[endRow][x]);
        }
        endRow -= 1;
        if (count == m*n) break;

        // 4.
        for( let x=endRow; x>=startRow; x--) {
            count += 1;
            result.push(matrix[x][startCol]);
        }
        startCol += 1;
        if (count == m*n) break;

    }

    return result;
}

const grid = [
    [ 1,  2,  3,  4,  5],
    [16, 17, 18, 19,  6],
    [15, 24, 25, 20,  7],
    [14, 23, 22, 21,  8],
    [13, 12, 11, 10,  9]
]


const result = spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
console.log(result);