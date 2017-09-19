// This function makes it so that when the disclaimer is clicked, an active class is set.

$(function() {
    $(".disclaimer-button").on("click", 
        function() {
                $(".disclaimer-button").toggleClass('disclaimer-button-active');
            });
 });

 /*
 $(function() {
    $(".disclaimer-button").on("click",
        function() {
            if(active === 1) {
                $(".disclaimer-button").removeClass('disclaimer-button-active');
                active = 0;
            }
    });
 });
 */
