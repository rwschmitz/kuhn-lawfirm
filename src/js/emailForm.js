$(function() {
  
     $("#yourName, #yourEmail, #yourPhoneNumber, #yourMessage").addClass("default-border");
  
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
              $("#yourName").removeClass("default-border");
              $("#yourName").removeClass("valid-border");
              $("#yourName").addClass("invalid-border");
           } else {
              $(".invalid-name").css("display", "none");
              $("#yourName").removeClass("default-border");
              $("#yourName").removeClass("invalid-border");
              $("#yourName").addClass("valid-border");
           }
           if (email.checkValidity() == false) {
              $(".invalid-email").css("display", "block");
              $("#yourEmail").removeClass("default-border");
              $("#yourEmail").removeClass("valid-border");
              $("#yourEmail").addClass("invalid-border");
           } else {
              $(".invalid-email").css("display", "none");
              $("#yourEmail").removeClass("default-border");
              $("#yourEmail").removeClass("invalid-border");
              $("#yourEmail").addClass("valid-border");
  
           }
           if (number.checkValidity() == false) {
              $(".invalid-number").css("display", "block");
              $("#yourPhoneNumber").removeClass("default-border");
              $("#yourPhoneNumber").removeClass("valid-border");
              $("#yourPhoneNumber").addClass("invalid-border");
           } else {
              $(".invalid-number").css("display", "none");
              $("#yourPhoneNumber").removeClass("default-border");
              $("#yourPhoneNumber").removeClass("invalid-border");
              $("#yourPhoneNumber").addClass("valid-border");
           }
           if (message.checkValidity() == false) {
              $(".invalid-message").css("display", "block");
              $("#yourMessage").removeClass("default-border");
              $("#yourMessage").removeClass("valid-border");
              $("#yourMessage").addClass("invalid-border");
           } else {
              $(".invalid-message").css("display", "none");
              $("#yourMessage").removeClass("default-border");
              $("#yourMessage").removeClass("invalid-border");
              $("#yourMessage").addClass("valid-border");
           }
        } else {
           $.ajax({
              type: 'POST',
              url: 'email_form.php',
              data: $('#needs-validation').serialize(),
              done: $('#thankYouModal').modal('show'),
           });
           $(".invalid-name, .invalid-email, .invalid-number, .invalid-message").css("display", "none");
           $("#yourName, #yourEmail, #yourPhoneNumber, #yourMessage").removeClass("invalid-border");
           $("#yourName, #yourEmail, #yourPhoneNumber, #yourMessage").removeClass("valid-border");
           $("#yourName, #yourEmail, #yourPhoneNumber, #yourMessage").addClass("default-border");
           document.getElementById("needs-validation").reset();
           return false;
        }
     });
  });
  