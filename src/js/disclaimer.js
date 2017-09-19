// This function makes it so that when the disclaimer is clicked, an active class is set.

var active = false;

$(function() {
    $(".disclaimer-button").click(function() {
       $(".disclaimer-button").addClass('disclaimer-button-active');
       active = true;
    });
 });

 $(function() {
    $(".disclaimer-button").click(function() {
        if(active === 1) {
       $(".disclaimer-button").addClass('disclaimer-button-active');
       active = false;
        }
    });
 });
