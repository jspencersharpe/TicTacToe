currentMove = 'X';
var movesLeft = 9;

$('td').on('click', function() {
  var $this = $(this);
  
  if ($this.text() === '') {
    $(this).text(currentMove);
    currentMove = currentMove === 'X' ? 'O' : 'X';

    if (--movesLeft) {
      $('.status').text("${currentMove}'s Move");
    } else {
      $('.status').text("It's a tie");
    }
    whoWon();
  }
});

function whoWon() {
  var td1 = $('td:nth-child(1)').text();
  var td2 = $('td')[1].text();
  var td3 = $('td')[2].text();
  var td4 = $('td')[3].text();
  var td5 = $('td')[4].text();
  var td6 = $('td')[5].text();
  var td7 = $('td')[6].text();
  var td8 = $('td')[7].text();
  var td9 = $('td')[8].text();
  
  if (td1 && td1 === td2 === td3) {
    $('.status').text(`${td1} Wins`);
  }
  
  
}
