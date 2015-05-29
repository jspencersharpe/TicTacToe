currentMove = 'X';
var movesLeft = 9;

$('td').click(function () {
  var $this = $(this);
  
  if ($this.text() === '') {
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
  var td1 = $('tr:nth-child(1) td:nth-child(1)').text();
  var td2 = $('tr:nth-child(1) td:nth-child(2)').text();
  var td3 = $('tr:nth-child(1) td:nth-child(3)').text();
  var td4 = $('tr:nth-child(2) td:nth-child(1)').text();
  var td5 = $('tr:nth-child(2) td:nth-child(2)').text();
  var td6 = $('tr:nth-child(2) td:nth-child(3)').text();
  var td7 = $('tr:nth-child(3) td:nth-child(1)').text();
  var td8 = $('tr:nth-child(3) td:nth-child(2)').text();
  var td9 = $('tr:nth-child(3) td:nth-child(3)').text();
  
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
