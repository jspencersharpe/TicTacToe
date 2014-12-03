var topWin; 
var midWin;
var botWin;
var leftWin
var downWin
var rightWin;
var tLBR;
var tRBL;

var a1 = $('#a1');

;(function(){
  "use strict";
$('#a1').click(function(){
      if (a1.hasClass('x')) {
      alert("Player 1 wins!");
  }
});

}());

// check for 3 in a row
  // top to bottom 3 ways
  // side to side 3 ways
  // diagonal both ways
  // .set
  // .onDisconnect is a firebase function, 
  // .remove is a firebase thing as well
