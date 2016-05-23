var email = require('./email.js').email;

$(document).ready(function(){
  $('#email').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = email(goal);
  });
});
