function reshapeMatrix(mat, r, c) {
    function newMatFunc(r, c) {
        let arr = Array(r).fill(0);
        for( let i = 0; i < r; i++){
            arr[i] = Array(c).fill(0);
        }

        return arr;
    }

    // error handling-----------starting--------------------
    if( mat.length === 0 || mat[0].length === 0 ) {
        return "Empty matrix is not allowed";
    }

    if( r*c !== mat.length * mat[0].length ) {
        return mat; // coz given dimensions for new matrix is not possible
    }

    if( r === 0 || c === 0 ) {
        return "Reshape values are not defined.";
    }
    // error handling-----------ending--------------------

    const newMat = newMatFunc(r, c) // create a new matrix of r x c

    // fill newMat with values
    let m = mat.length;
    let n = mat[0].length;
    let row = 0; // newMat start row 
    let col = 0; // newMat start col
    for( let i=0; i<m; i++) {
        for ( let j=0; j<n; j++) {
            newMat[row][col] = mat[i][j];
            col++;
            if (col === c) {
                col = 0;
                row++;
            }
        }
    }

    if(r === 1) {
        return [...newMat[0]] // if matrix is of just one row, then return the newMat as 1D array
    }

}

const mat = [[2,3],[4,5]];
const largerToSmaller = [[1, 2, 3], [4, 5, 6]];
const smallerToLarger = [[1, 2], [3, 4], [5, 6]];
const emptyMatrix = [];
const To2d = [1, 2, 3, 4, 5, 6];

const reshaped = reshapeMatrix(mat, 1, 4);
console.log(reshaped);