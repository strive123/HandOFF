$(document).ready(function () {
    size_div = $(".snip1174").size();
    x=6;
    $('.snip1174:lt('+x+')').show();
    $('#load-more').click(function () {

        x= (x+6 <= size_div) ? x+6 : size_div;
        $('.snip1174:lt('+x+')').fadeIn(1500);
        if (x == size_div) {
        	$(this).remove();
        };
    });
});

// Get the modal
var mo_modal_signin = document.getElementById('myModal-sign-in');
var mo_modal_signup = document.getElementById('myModal-sign-up');

// Get the button that opens the modal
var mo_btn_signin = document.getElementById("sign-in");
var mo_btn_signup = document.getElementById("sign-up");

// Get the <span> element that closes the modal
var mo_span_signin = $(".close")[0];
var mo_span_signup = $(".close")[1];

// When the user clicks on the button, open the modal 
mo_btn_signin.onclick = function() {
    mo_modal_signin.style.display = "block";
}
mo_btn_signup.onclick = function() {
    mo_modal_signup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
mo_span_signin.onclick = function() {
    // mo_modal.style.display = "none";
    $(mo_span_signin).parent().fadeOut(500);
}
mo_span_signup.onclick = function() {
    // mo_modal.style.display = "none";
    $(mo_span_signup).parent().fadeOut(500);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == mo_modal_signin) {
        $(mo_span_signin).parent().fadeOut(500);
    }
    if (event.target == mo_modal_signup) {
        $(mo_span_signup).parent().fadeOut(500);
    }
}


// Confirm Password

var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm-password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords do not match!");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;