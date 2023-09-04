/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function(moves) {

// function to check who wins
function whoWins(grid, player) {
    let check = player === 'A' ? 'X' : 'O';

    // for row 0
    if (grid[0][0] === check && grid[0][1] === check && grid[0][2] === check) {
    return true;
    }

    // for row 1
    if (grid[1][0] === check && grid[1][1] === check && grid[1][2] === check) {
    return true;
    }

    // for row 2
    if (grid[2][0] === check && grid[2][1] === check && grid[2][2] === check) {
    return true;
    }

    // for col 0
    if (grid[0][0] === check && grid[1][0] === check && grid[2][0] === check) {
    return true;
    }

    // for col 1
    if (grid[0][1] === check && grid[1][1] === check && grid[2][1] === check) {
    return true;
    }

    // for col 2
    if (grid[0][2] === check && grid[1][2] === check && grid[2][2] === check) {
    return true;
    }

    // diagonal 1
    if (grid[0][0] === check && grid[1][1] === check && grid[2][2] === check) {
    return true;
    }

    // diagonal 2 (fixed index)
    if (grid[2][0] === check && grid[1][1] === check && grid[0][2] === check) {
    return true;
    }

    return false;

}

  const tictac = Array(3).fill('-');
    for(let i=0; i<tictac.length; i++) {
        tictac[i] = Array(3).fill('-');
    }

    let check = true;
    moves.forEach(move => {
        tictac[move[0]][move[1]] = check ? 'X' : 'O';
        check = !check;
    })
  

  if(whoWins(tictac, 'A')) {
    return 'A'
  } else if(whoWins(tictac, 'B')) {
    return 'B'
  } else if(moves.length < 9) {
    return "Pending";
  } else return 'Draw'
    
};

const moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]; 
tictactoe(moves);