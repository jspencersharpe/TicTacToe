;var ttt = (function(){

  "use strict";
  var fb = new Firebase('https://spencertictactoe.firebaseio.com/');
  var $xOro;
  var counter = 0;
  
  $('td').one('click', function(e) {
    if (counter % 2 === 0) {
      $(this).addClass("x");
      $xOro = "x";
    } else {
      $(this).addClass("o");
      $xOro = "o";
    }
       e.stopPropagation();
      $(this).append($xOro);

      return counter++;
  });
}());
