currentMove = 'X';
var moveCount = 9;

$('td').on('click', function() {
  var $this = $(this);
  
  if ($this.text() === '') {
    $(this).text(currentMove);
    currentMove = currentMove === 'X' ? 'O' : 'X';

    if (movesLeft--) {
      $('.status').text("${currentMove}'s Move");
    } else {
      $('.status').text("It's a tie");
    }
    
  }
});
