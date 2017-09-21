function contactForm() {
    $('#needs-validation').submit(function(e) {
       e.preventDefault();
       $.ajax({
          url: './src/php/email_form.php',
          type: 'post',
          data: $('#needs-validation').serialize,
          success: $(function() {
             $('.contact-submit-button').on("click",
                function() {
                   $('#thankYouModal').modal('show');
                });
          })
       });
    });
    return false;
 }
 


/*function contactForm () {
    e.preventDefault();
    $.ajax({
        url: './src/php/email_form.php',
        type: 'post',
        data:$('#needs-validation').serialize,
        success:function() {
            $('#thankYouModal').modal('show');
        }
    });
}


/*
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
});*/
