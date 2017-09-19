// This function makes it so that when the disclaimer is clicked, an active class is set.

var active = 0;

$(function() {
    $(".disclaimer-button").on("click", 
        function() {
            if(active === 0) {
                $(".disclaimer-button").addClass('disclaimer-button-active');
                active = 1;
            }
    });
 });

 $(function() {
    $(".disclaimer-button").on("click",
        function() {
            if(active === 1) {
                $(".disclaimer-button").removeClass('disclaimer-button-active');
                active = 0;
            }
    });
 });
