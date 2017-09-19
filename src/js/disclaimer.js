// This function makes it so that when the disclaimer is clicked, an active class is set.

$(function() {
    $(".disclaimer-button").click(function() {
       $(".disclaimer-button").addClass('disclaimer-button-active');
       active = true;
          if (active) {
            $(".disclaimer-button").click(function() {
                $(".disclaimer-button").removeClass('disclaimer-button-active');
                active = false;
          });
        }
    });
 });
