var board = [['', '', ''], ['', '', ''],['', '', '']];

currentMove = 'X';
var movesLeft = 9;

$('td').click(function () {
  var $this = $(this);
  var row = $this.parent().index();
  var col = $this.index();
  
  if (!board[row][col] && !whoWon()) {
    board[row][col] = currentMove;
    $(this).text(currentMove);
    currentMove = currentMove === 'X' ? 'O' : 'X';
    
    var winner = whoWon();
    
    if (winner) {
      $('.status').text(`${winner} Wins`);
    } else if (--movesLeft) {
      $('.status').text(`${currentMove}'s Move`);
    } else {
      $('.status').text(`It's a tie`);
    }
  }
});

function whoWon() {
  var td1 = board[0][0];
  var td2 = board[0][1];
  var td3 = board[0][2];
  var td4 = board[1][0];
  var td5 = board[1][1];
  var td6 = board[1][2];
  var td7 = board[2][0];
  var td8 = board[2][1];
  var td9 = board[2][2];
  
  // Rows
  if (td1 && td1 === td2 && td2 === td3) {
    return td1;
  } else if (td4 && td4 === td5 && td5 === td6) {
    return td4;
  } else if (td7 && td7 === td8 && td8 === td9) {
    return td7;
  }
  // Columns
  else if (td1 && td1 === td4 && td4 === td7) {
    return td1
  } else if (td2 && td2 === td5 && td5 === td8) {
    return td2;
  } else if (td3 && td3 === td6 && td6 === td9) {
    return td3;
  }
  // Diags
  else if (td1 && td1 === td5 && td5 === td9) {
    return td1;
  } else if (td3 && td3 === td5 && td5 === td7) {
    return td3;
  }
  // Tie or In-Progress
  return null
}
