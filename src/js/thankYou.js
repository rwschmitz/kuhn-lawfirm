$('#needs-valiation').on('submit', function(e) {
    e.preventDefault();
    var messageDetails = $('#needs-validation').serialize();
    $.post('./src/php/email_form.php', messageDetails, function(data) {
        $('#needs-validation').html(data);
    });
});

$(function() {
    $('.contact-submit-button').on("click",
    function() {
        $('#thankYouModal').modal('show');
    });
});
