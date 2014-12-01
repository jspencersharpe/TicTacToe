;(function(){
  "use strict";
  var $xOro;
  var counter = 0;
  $('.space').click(function(e) {
    counter++;
    if (counter % 2 === 0) {
      $xOro = "O";
    } else {
      $xOro = "X";
    }
      e.stopPropagation();
      $(this).append($xOro);
    });
}());
