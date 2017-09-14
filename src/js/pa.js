for (var j = 1; j < 19;) {
    $(function() {
       $(".pa-" + j).click(function() {
          $(".pa-" + j).addClass('pa-button-active');
          for (var i = 1; i < 19; i++) {
             if (i === 1) {
                continue;
             }
             $(".pa-" + i).removeClass('pa-button-active');
          }
       });
    });
 }
 