// TO DO -- IMPLEMENT JQUERY AJAX SUBMISSION W/ VANILLA JS VALIDATION

$('#contact-submit-button').on('submit', function(e) {
    e.preventDefault();
    var formInfo = $("#needs-validation").serialize();
    $.post('email_form.php', formInfo);
 });
 



/*$(function() {
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
});*/

/*var xhr = new XMLHttpRequest();
xhr.open('POST', 'email_form.php', true);
xhr.send(null);

xhr.onreadystatechange = function() {
   if (xhr.readyState === 4) { // Request finished, response ready
      if (xhr.status === 200) { // Server has responded and everything is OK
         ("#thankYouModal").modal('show');
      }
   }
};*/
