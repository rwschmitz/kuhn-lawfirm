$(function() {
  
     var form = document.getElementById("needs-validation");
     var name = document.getElementById("yourName");
     var email = document.getElementById("yourEmail");
     var number = document.getElementById("yourPhoneNumber");
     var message = document.getElementById("yourMessage");
  
     $('#needs-validation').on('submit', function(e) {
        if (name.checkValidity() == false || email.checkValidity() == false || number.checkValidity() == false || message.checkValidity() == false) {
           e.preventDefault();
           e.stopPropagation();
           if (name.checkValidity() == false) {
              $(".invalid-name").css("display", "block");
           } else {
              $(".invalid-name").css("display", "none");
           }
           if (email.checkValidity() == false) {
              $(".invalid-email").css("display", "block");
           } else {
              $(".invalid-email").css("display", "none");
           }
           if (number.checkValidity() == false) {
              $(".invalid-number").css("display", "block");
           } else {
              $(".invalid-number").css("display", "none");
           }
           if (message.checkValidity() == false) {
              $(".invalid-message").css("display", "block");
           } else {
              $(".invalid-message").css("display", "none");
           }
        } else {
           $.ajax({
              type: 'POST',
              url: 'email_form.php',
              data: $('#needs-validation').serialize(),
              done: $('#thankYouModal').modal('show'),
           });
           $(".invalid-name, .invalid-email, .invalid-number, .invalid-message").css("display", "none");
           document.getElementById("needs-validation").reset();
           return false;
        }
     });
  });
  