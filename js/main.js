;var ttt = (function(){
  "use strict";
  var fb = new Firebase('https://spencertictactoe.firebaseio.com/');
  var $xOro;
  var counter = 0;
  
  //fb.once()
  //snapshot = data that gets returned
  //snapshot.val = data
  //
  board: [["", "", ""],
          ["", "", ""],
          ["", "", ""]],

function(board, td){
    var GameBoard = $(td).index();
    fb.once(GameBoard);
  }

    $('td').one('click', function(e) {
    if (counter % 2 === 0) {
      $(this).addClass("x");
      $xOro = "x";
    } else {
      $(this).addClass("o");
      $xOro = "o";
    }
      $(this).append($xOro);
      return counter++;
    });
}());

  

