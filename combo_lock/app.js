$(document).ready(function () {
  // Events
  $('#output').hide();
  $('#start').click(startGame);
  $('#checkLock').click(openLock);

  $('#checkLock').click(Count);

  // Functions
  function startGame() {
    count = 0;
    ourSecretNum = Math.floor(Math.random() * (999 - 100 + 1) + 100).toString();
    $('#start').hide();
    $('#rules').hide();
    $('#output').show();
    for (x = 0; x < $('input[type="number"]').length; x++) {
      $('input[type="number"]').eq(x).val('5');
    }
    $('small').html('Red is too low. <br><br> Blue is too high. <br><br> You have tried <span id="showCount"></span> times.');

    return count;
  }

  function openLock() {
    var win = 0;
    for (var x = 0; x < $('input[type="number"]').length; x++) {
      var guessNumber = $('input[type="number"]').eq(x);
      var result = checkNumber(guessNumber.val(), ourSecretNum[x]);
      guessNumber.css({
        backgroundColor: result.backgrd
      })
      if (result.checker) {
        win++
      }
    }
    if (win == 3) {
      $('#start').show();
      $('small').html('Congratulation! You win!<br> The right number is ' + ourSecretNum + '<br>Click \'Start\' to play again. <br> You have tried <span id="showCount"></span> times.')
    }
  }

  function checkNumber(a, b) {
    var response = {};
    if (a < b) {
      response.checker = false;
      response.backgrd = 'red';
    }
    if (a > b) {
      response.checker = false;
      response.backgrd = 'blue';
    }

    if (a == b) {
      response.checker = true;
      response.backgrd = 'green';
    }
    return response;
  }

  function Count() {
    count++;
    $('#showCount').text(count);
    return false;
  }

  // CSS Styling
  $('body').css({
    backgroundColor: '#ccc',
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: '#fff'
  });

  $('h1').css({
    backgroundColor: '#333',
    padding: '1rem',
    maxWidth: '600px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '4.5rem',
    marginBottom: '1rem',
    borderRadius: '3px',
    boxShadow: '1px 1px 3px black'
  });

  $('#output').css({
    backgroundColor: '#777',
    padding: '3rem 1rem',
    maxWidth: '600px',
    margin: '1rem auto',
    borderRadius: '3px',
    boxShadow: '1px 1px 3px black'
  });

  $('input[type="number"]').css({
    color: '#fff',
    fontSize: '3em',
    width: '60px',
    border: '1px solid black',
    backgroundColor: 'black',
    textAlign: 'center',
    borderRadius: '3px',
    marginBottom: '1rem',
    boxShadow: '1px 1px 3px black'
  });

  $('.btn').css({
    backgroundColor: '#555',
    padding: '1rem',
    maxWidth: '160px',
    margin: 'auto',
    borderRadius: '3px',
    boxShadow: '1px 1px 3px black'
  });

  $('small').css({
    color: '#fff',
    fontSize: '1.2rem',
    backgroundColor: '#555',
    padding: '1.5rem 1rem',
    borderRadius: '3px',
    boxShadow: '1px 1px 3px black',
    display: 'block',
    marginBottom: '1.5rem'
  });

  $('#start').css({
    marginTop: '3rem'
  })

  $('#rules').css({
    marginTop: '5rem',
    backgroundColor: '#555',
    padding: '1rem',
    maxWidth: '600px',
    margin: '3rem auto',
    borderRadius: '3px',
    boxShadow: '1px 1px 3px black'
  });

  $('#rules ul').css({
    listStyle: 'none'
  });
  $('#rules li').css({
    marginTop: '8px'
  });

});