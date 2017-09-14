$(function() {
    $(".pa-1").click(function() {
        $(".pa-1").addClass('pa-button-active');
        for (var j=2; j<17; j++) {
            $(".pa-" + i ).removeClass('pa-button-active');
        }
    });
});