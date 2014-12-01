;(function(){
  "use strict";
  var $xOro;
  var counter = 0;
  $('.space').one('click', function(e) {
    counter++;
    if (counter % 2 === 0) {
      $xOro = "O";
      //$(this).removeClass(".0");
      //$(this).addClass(".0");
    } else {
      $xOro = "X";
      //$(this).removeClass(".X")
      //$(this).addClass(".X");
    }
       e.stopPropagation();
      $(this).append($xOro);
    });
}());
