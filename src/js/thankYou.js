$(function() {
    $(".contact-submit-button").click(function() {
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
