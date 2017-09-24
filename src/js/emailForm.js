/*function checkName(e) {
   var name = document.getElementById("yourName");

   if (name.checkValidity() == false) {
      alert("name broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
   }
}

function checkEmail(e) {
   var email = document.getElementById("yourEmail");

   if (email.checkValidity() == false) {
      alert("email broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
   }

}

function checkNumber(e) {
   var number = document.getElementById("yourPhoneNumber");

   if (number.checkValidity() == false) {
      alert("number broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
   }

}

function checkMessage(e) {
   var message = document.getElementById("yourMessage");

   if (message.checkValidity() == false) {
      alert("message broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
   }

}

form.addEventListener("submit", checkName, false);
form.addEventListener("submit", checkEmail, false);
form.addEventListener("submit", checkNumber, false);
form.addEventListener("submit", checkMessage, false);

$(function() {
  $('#needs-validation').on('submit', function(e) {
     $.ajax({
        type: 'POST',
        url: 'email_form.php',
        data: $('#needs-validation').serialize(),
        done: $('#thankYouModal').modal('show'),
     });
     return false;
  });
});*/