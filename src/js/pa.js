$(function() {
    do {
       $(".pa-1").click(function() {
          $(".pa-1").addClass('pa-button-active');
          for (var i = 2; i < 19; i++) {
             $(".pa-" + i).removeClass('pa-button-active');
          }
       });
    }
    while (j < 10);
 });
 