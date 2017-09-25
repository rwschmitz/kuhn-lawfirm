// This file is exclusively for opening any resource modals

$(function() {
    $("#resource1").click(function() {
        $("#resourceModal1").modal('show');
    });
});

$(function() {
    $(".open-resources-button").click(function() {
        $(".open-resources-button").toggleClass('open-resources-button-active');
    });
 });
