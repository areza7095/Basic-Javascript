//make a tictac toe game we can play in the console

//create a board
var board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

//create a function to print the board
function printBoard() {
  console.log('Current Board:');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
}

//create a function to place a marker on the board
function placeMarker(row, column, marker) {
  board[row][column] = marker;
}

//create a function to check for a win  - 3 in a row
function checkForWin() {
  //check for horizontal win
  if (board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][0] !== ' ') {
    console.log('Player ' + board[0][0] + ' wins!');
    return true;
  } else if (board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][0] !== ' ') {
    console.log('Player ' + board[1][0] + ' wins!');
    return true;
  } else if (board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][0] !== ' ') {
    console.log('Player ' + board[2][0] + ' wins!');
    return true;
  }
  //check for vertical win
  else if (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[0][0] !== ' ') {
      console.log('Player ' + board[0][0] + ' wins!');
      return true;
    } else if (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[0][1] !== ' ') {
      console.log('Player ' + board[0][1] + ' wins!');
      return true;
    } else if (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[0][2] !== ' ') {
      console.log('Player ' + board[0][2] + ' wins!');
      return true;
    }
  //check for diagonal win
  else if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== ' ') {
      console.log('Player ' + board[0][0] + ' wins!');
      return true;
    } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== ' ') {
      console.log('Player ' + board[0][2] + ' wins!');
      return true;
    } else {
      return false;
    }
}

//create a function to check for a tie  
function checkForTie() {
  if (board[0][0] !== ' ' && board[0][1] !== ' ' && board[0][2] !== ' ' && board[1][0] !== ' ' && board[1][1] !== ' ' && board[1][2] !== ' ' && board[2][0] !== ' ' && board[2][1] !== ' ' && board[2][2] !== ' ') {
    console.log('It\'s a tie!');
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid move
function checkForValidMove(row, column) {
  if (board[row][column] === ' ') {
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid row
function checkForValidRow(row) {
  if (row === 0 || row === 1 || row === 2) {
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid column
function checkForValidColumn(column) {
  if (column === 0 || column === 1 || column === 2) {
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid marker
function checkForValidMarker(marker) {
  if (marker === 'X' || marker === 'O') {
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid input
function checkForValidInput(row, column, marker) {
  if (checkForValidRow(row) && checkForValidColumn(column) && checkForValidMarker(marker)) {
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid move
function checkForValidMove(row, column) {
  if (board[row][column] === ' ') {
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid row
function checkForValidRow(row) {
  if (row === 0 || row === 1 || row === 2) {
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid column
function checkForValidColumn(column) {
  if (column === 0 || column === 1 || column === 2) {
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid marker
function checkForValidMarker(marker) {
  if (marker === 'X' || marker === 'O') {
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid input
function checkForValidInput(row, column, marker) {
  if (checkForValidRow(row) && checkForValidColumn(column) && checkForValidMarker(marker)) {
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid move
function checkForValidMove(row, column) {
  if (board[row][column] === ' ') {
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid row
function checkForValidRow(row) {
  if (row === 0 || row === 1 || row === 2) {
    return true;
  } else {
    return false;
  }
}

//create a function to check for a valid column
function checkForValidColumn(column) {
  if (column === 0 || column === 1 || column === 2) {
    return true;
  } else {
    return false;
  }
}

