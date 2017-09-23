var form = document.getElementById("needs-validation");

function checkName(e) {
   var name = document.getElementById("yourName");

   if (name.checkValidity() == false) {
      alert("name broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
      return;
   }

}

function checkEmail(e) {
   var email = document.getElementById("yourEmail");

   if (email.checkValidity() == false) {
      alert("email broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
      return;
   }

}

function checkNumber(e) {
   var number = document.getElementById("yourPhoneNumber");

   if (number.checkValidity() == false) {
      alert("number broken")
      e.preventDefault();
      e.stopPropagation();
   } else {
      return;
   }

}

function checkMessage(e) {
   var message = document.getElementById("yourMessage");

   if (message.checkValidity() == false) {
      alert("message broken")
      e.preventDefault();
      e.stopPropagation();
   } else {
      return;
   }

}

form.addEventListener("submit", checkName, false);
form.addEventListener("submit", checkEmail, false);
form.addEventListener("submit", checkNumber, false);
form.addEventListener("submit", checkMessage, false);
