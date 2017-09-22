$(function() {
    $(".contact-submit-button").submit(function() {
        $.ajax({
            type: 'post',
            url: 'email_form.php',
            data: $('#needs-validation').serialize(),
            success: function() {
                ("#thankYouModal").modal('show');
                
            }
        });
        /*document.getElementById("needs-validation").reset();*/
    });
});
