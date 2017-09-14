$(function() {
    for(var i=1; i<17;i++)
        $(".pa-" + i).click(function() {
            $(".pa-" + i).addClass('pa-button-active');
            for (var j=2; j<17; j++) {
                $(".pa-" + j ).removeClass('pa-button-active');
            }
        });
});