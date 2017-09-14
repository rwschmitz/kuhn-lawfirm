$(function() {
    for (var j; j < 19;) {
       $(".pa-" + j).click(function() {
          $(".pa-" + j).addClass('pa-button-active');
          for (var i = 1; i < 19; i++) {
             if (i === j) {
                continue;
             }
             $(".pa-" + i).removeClass('pa-button-active');
          }
       });
    }
 });
 