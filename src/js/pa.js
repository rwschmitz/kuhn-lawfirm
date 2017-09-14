var pa1, pa2, pa3, pa4, pa5, pa6, pa7, pa8, pa9, pa10, pa11, pa12, pa13, pa14, pa15, pa16;
pa1 = pa2 = pa3 = pa4 = pa5 = pa6 = pa7 = pa8 = pa9 = pa10 = pa11 = pa12 = pa13 = pa14 = pa15 = pa16 = false;





$(function() {
    $(".pa-1").click(function() {
        $(".pa-1").addClass('pa-button-active');
        for (i=2; i<17; i++) {
            $(".pa" + i ).removeClass('pa-button-active');
        }
    });
});