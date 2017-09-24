/*
$(function() {
  $("#needs-validation").submit(function() {
      $.ajax({
          type: 'post',
          url: 'email_form.php',
          data: $('#needs-validation').serialize(),
          success: function() {
              ("#thankYouModal").modal('show');
              
          }
      });
  });
});




function checkName(e) {
   var name = document.getElementById("yourName");

   if (name.checkValidity() == false) {
      alert("name broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
     cat = true;
   }
}

function checkEmail(e) {
   var email = document.getElementById("yourEmail");

   if (email.checkValidity() == false) {
      alert("email broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
     dog = true;
   }

}

function checkNumber(e) {
   var number = document.getElementById("yourPhoneNumber");

   if (number.checkValidity() == false) {
      alert("number broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
      horse = true;
   }

}

function checkMessage(e) {
   var message = document.getElementById("yourMessage");

   if (message.checkValidity() == false) {
      alert("message broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
      mouse = true;
   }

}

form.addEventListener("submit", checkName, false);
form.addEventListener("submit", checkEmail, false);
form.addEventListener("submit", checkNumber, false);
form.addEventListener("submit", checkMessage, false);

console.log(cat);
console.log(dog);
console.log(horse);
console.log(mouse);
*/