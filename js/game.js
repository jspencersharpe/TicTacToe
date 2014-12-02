;(function(){
  "use strict";
  
  if ($('td#a1').hasClass('x')) {
  //if ($("td#a1:contains('X')") && $("td#b1:contains('X')") && $("td#c1:contains('X')")){
    alert("Player 1 wins!");
  };

}());

// check for 3 in a row
  // top to bottom 3 ways
  // side to side 3 ways
  // diagonal both ways
