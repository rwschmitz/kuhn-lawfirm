var form = document.getElementById("needs-validation");
var xhr = new XMLHttpRequest();
var cat, dog, horse, mouse;
cat = dog = horse = mouse = false;
xhr.open('POST', 'email_form.php', true);
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) { // Request finished, response ready
     if (xhr.status === 200) { // Server has responded and everything is OK
        if (cat == true && dog == true && horse == true && mouse == true) {
           $("#thankYouModal").modal('show');
        }
     }
  }
};




function checkName(e, cat) {
   var name = document.getElementById("yourName");

   if (name.checkValidity() == false) {
      alert("name broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
     cat = true;
     return cat;
   }
}

function checkEmail(e, dog) {
   var email = document.getElementById("yourEmail");

   if (email.checkValidity() == false) {
      alert("email broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
     dog = true;
     return dog;
   }

}

function checkNumber(e, horse) {
   var number = document.getElementById("yourPhoneNumber");

   if (number.checkValidity() == false) {
      alert("number broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
      horse = true;
      return horse;
   }

}

function checkMessage(e, mouse) {
   var message = document.getElementById("yourMessage");

   if (message.checkValidity() == false) {
      alert("message broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
      mouse = true;
      return mouse;
   }

}

form.addEventListener("submit", checkName, false);
form.addEventListener("submit", checkEmail, false);
form.addEventListener("submit", checkNumber, false);
form.addEventListener("submit", checkMessage, false);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
