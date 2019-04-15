$(document).ready(function(){
  // when the #name-form is submitted, get the #name value and greet them in the h1!
  $('#name-form').on('submit', changeHeader);

  function changeHeader(event) {
    event.preventDefault();
    var name = $('#name').val();
    $('h1').text('Hello ' + name + '!');
  }

})