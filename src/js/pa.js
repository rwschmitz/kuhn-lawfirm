$(function() {
    $(".pa-1").click(function() {
        $(".pa-1").addClass('pa-button-active');
        for (var i=2; i<17; i++) {
            $(".pa-" + i ).removeClass('pa-button-active');
        }
    });
});

$(function() {
    $(".pa-2").click(function() {
        $(".pa-2").addClass('pa-button-active');
        for (var i=1; i<17; i++) {
            if (i === 2) { continue; }
            $(".pa-" + i ).removeClass('pa-button-active');
        }
    });
});