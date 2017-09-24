$(function() {
    
       var form = document.getElementById("needs-validation");
       var name = document.getElementById("yourName");
       var email = document.getElementById("yourEmail");
       var number = document.getElementById("yourPhoneNumber");
       var message = document.getElementById("yourMessage");
    
       $('#needs-validation').on('submit', function(e) {
          if (name.checkValidity() == false || email.checkValidity() == false || number.checkValidity() == false || message.checkValidity() == false) {
             alert("form broken");
             e.preventDefault();
             e.stopPropagation();
          } else {
             $.ajax({
                type: 'POST',
                url: 'email_form.php',
                data: $('#needs-validation').serialize(),
                done: $('#thankYouModal').modal('show'),
             });
             document.getElementById("needs-validation").reset();
             return false;
          }
       });
    });
    