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
  
  }


  $('#color-form').on('submit', saveColor)

  function saveColor(event){
    // prevent the default event action
    // create a new div with a background color using the red green and blue values
    // append it to #saved-colors
  }

  // BONUS
  // have a random color when the page loads

})