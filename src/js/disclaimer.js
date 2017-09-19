// This function makes it so that when the disclaimer is clicked, an active class is set.

active = 0;

$(function() {
    $(".disclaimer-button").click(function() {
       $(".disclaimer-button").addClass('disclaimer-button-active');
       active = 1;
    });
 });

 $(function() {
    $(".disclaimer-button").click(function() {
        if(active === 1) {
       $(".disclaimer-button").addClass('disclaimer-button-active');
       active = 0;
        }
    });
 });
