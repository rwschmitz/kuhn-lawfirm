var form = document.getElementById("needs-validation");
var a = false;
var b = false;
var c = false;
var d = false;
var xhr = new XMLHttpRequest();

xhr.open('POST', 'email_form.php', true);
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) { // Request finished, response ready
     if (xhr.status === 200) { // Server has responded and everything is OK
        if (a == true && b == true && c == true && d == true) {
           $("#thankYouModal").modal('show');
        }
     }
  }
};




function checkName(e, a) {
   var name = document.getElementById("yourName");

   if (name.checkValidity() == false) {
      alert("name broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
     a = true;
     return a;
   }
}

function checkEmail(e, b) {
   var email = document.getElementById("yourEmail");

   if (email.checkValidity() == false) {
      alert("email broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
     b = true;
     return b;
   }

}

function checkNumber(e, c) {
   var number = document.getElementById("yourPhoneNumber");

   if (number.checkValidity() == false) {
      alert("number broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
      c = true;
      return c;
   }

}

function checkMessage(e, d) {
   var message = document.getElementById("yourMessage");

   if (message.checkValidity() == false) {
      alert("message broken");
      e.preventDefault();
      e.stopPropagation();
   } else {
      d = true;
      return d;
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
