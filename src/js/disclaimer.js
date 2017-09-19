// This function makes it so that when the disclaimer is clicked, an active class is set.

$(function() {
    $(".disclaimer-button").click(function() {
        $(".disclaimer-button").toggleClass('disclaimer-button-active');
    });
 });
