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

$(function() {
    $(".pa-3").click(function() {
        $(".pa-3").addClass('pa-button-active');
        for (var i=1; i<17; i++) {
            if (i === 3) { continue; }
            $(".pa-" + i ).removeClass('pa-button-active');
        }
    });
});

$(function() {
    $(".pa-4").click(function() {
        $(".pa-4").addClass('pa-button-active');
        for (var i=1; i<17; i++) {
            if (i === 4) { continue; }
            $(".pa-" + i ).removeClass('pa-button-active');
        }
    });
});

$(function() {
    $(".pa-5").click(function() {
        $(".pa-5").addClass('pa-button-active');
        for (var i=1; i<17; i++) {
            if (i === 5) { continue; }
            $(".pa-" + i ).removeClass('pa-button-active');
        }
    });
});