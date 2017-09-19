// This function makes it so that when the disclaimer is clicked, an active class is set.

var active = false;

$(function() {
    $(".disclaimer-button").on("click", 
        function() {
            if(active === false) {
                $(".disclaimer-button").addClass('disclaimer-button-active');
                active = true;
            }
    });
 });

 $(function() {
    $(".disclaimer-button").on("click",
        function() {
            if(active === true) {
                $(".disclaimer-button").removeClass('disclaimer-button-active');
            }
    });
 });
