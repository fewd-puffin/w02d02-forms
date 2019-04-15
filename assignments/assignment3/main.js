$(document).ready(function(){
  var red = 255;
  var green = 255;
  var blue = 255;

  
  $('.color-input').on('change', changeBackground);

  function changeBackground(event) {
    // get the value of this input and assign it to a varable
    // get the id of this input and assign it to a variable
    // if the id is red change the red variable to the value, if green change green, if blue, change blue
    // change the background color of the body using the updated red, green and blue values
    var value = $(this).val();
    var id = $(this).attr('id');

    if (id === 'red') {
      red = value;
    } else if (id === 'green') {
      green = value;
    } else {
      blue = value;
    }
    $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')')
  }


  // function changeBackground(event) {
  //   event.preventDefault();
  //   red = $('#red').val();
  //   green = $('#green').val();
  //   blue = $('#blue').val();
  //   $('body').css('background-color', 'rgb(' + red + ', ' + green + ', ' + blue +') ');
  // }


  $('#color-form').on('submit', saveColor)

  function saveColor(event){
    // prevent the default event action
    event.preventDefault()
    // create a new div with a background color using the red green and blue values
    var newDiv = $('<div>').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')')
    // append it to #saved-colors
    $('#saved-colors').append(newDiv);
  }

  // BONUS
  // have a random color when the page loads
  var randomred = Math.ceil(Math.random() * 255);
  var randomgreen = Math.ceil(Math.random() * 255);
  var randomblue = Math.ceil(Math.random() * 255);
  $('body').css('background - color', 'rgb('+randomred +', '+randomgreen +', '+randomblue +') ');
  $('#red').val(randomred);
  $('#green').val(randomgreen);
  $('#blue').val(randomblue);
  red = randomred;
  green = randomgreen;
  blue = randomblue;

})