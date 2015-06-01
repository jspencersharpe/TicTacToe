var fb = new Firebase('https://spencertictactoe.firebaseio.com');
var gamesRef = fb.child('games');
var board = [['','',''],['','',''],['','','']];
var currentMove;
var movesLeft;
var myPiece;
var gameRef;

function randomXO() {
  return _.sample(['X','O']);
}

var lastGame = gamesRef.limitToLast(1);

lastGame.once('value', function (snapshot) {
  var data = snapshot.val() || {};
  var uuid = Object.keys(data)[0];
  
  if (!uuid || data[uuid].player2) {
    // create a new game
    myPiece = randomXO();
    gameRef = gamesRef.push({ board: board, player1: myPiece});
  } else {
   // attach to last game
    myPiece = data[uuid].player1 === 'X' ? 'O' : 'X';
    gameRef = gamesRef.child(uuid);
    gameRef.update({player2: myPiece});
  }
  
  gameRef.onDisconnect().remove();
  
  gameRef.on('value', function (snapshot) {
    if (snapshot.val()) {
      board = snapshot.val().board;
      movesLeft = 9 - _(board).flatten().compact().value().length;
      currentMove = movesLeft % 2 ? 'X' : 'O';

      var $table = createBoardTable(board);
      $('table').replaceWith($table);

      displayStatus(snapshot.val());
    } else {
      // window.location.reload();
      alert('A player disconnected. Refresh the page')
    }
  });
  
  $('.piece').text(`You are playing as ${myPiece}`)
});


$('.board').on('click', 'td', function () {
  var $this = $(this);
  var row = $this.parent().index();
  var col = $this.index();
  
  if (myPiece === currentMove && !board[row][col] && !whoWon()) {
    board[row][col] = currentMove;
    gameRef.child('board').set(board);
  }
});

function displayStatus(data) {
  var winner = whoWon();
  
  if (!data.player2) {
    $('.status').text(`Waiting on second player...`);
  } else if (winner) {
    $('.status').text(`${winner} Wins`);
  } else if (movesLeft) {
    $('.status').text(`${currentMove}'s Move`);
  } else {
    $('.status').text(`It's a tie`);
  }
}

function createBoardTable(board) {
  var $table = $('<table>');
  board.forEach(function (r) {
    var $row = $('<tr>');
    r.forEach(function (c) {
      var $cell = $(`<td>`).text(c);
      $row.append($cell);
    })
    $table.append($row);
  });
  return $table;
}


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

