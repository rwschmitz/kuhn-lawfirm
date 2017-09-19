// This function makes it so that when the disclaimer is clicked, an active class is set.

$(function() {
    $(".disclaimer-button").click(function() {
       $(".disclaimer-button").addClass('disclaimer-button-active');
       active = true;
          if (active) {
            active = false;
          }
          else {
          $("disclaimer-button").removeClass('pa-button-active');
          }
    });
 });
