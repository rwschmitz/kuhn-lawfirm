/* This javscript file allows users to jump around the page with a smooth scrolling animation.  Also, this script does not add hashes (#) to the url when clicked. */

$(function() {
    $('#goHome').click(function() {
       $('html, body').animate({
          scrollTop: $('#home').offset().top
       }, 1000);
    });
 });
 
 $(function() {
    $('#goAbout').click(function() {
       $('html, body').animate({
          scrollTop: $('#about').offset().top
       }, 1000);
    });
 });
 
 $(function() {
    $('#gopracticeAreas').click(function() {
       $('html, body').animate({
          scrollTop: $('#practice-areas').offset().top
       }, 1000);
    });
 });
 
 $(function() {
    $('#goAttorneys').click(function() {
       $('html, body').animate({
          scrollTop: $('#attorneys').offset().top
       }, 1000);
    });
 });
 
 $(function() {
    $('#goResources').click(function() {
       $('html, body').animate({
          scrollTop: $('#resources').offset().top
       }, 1000);
    });
 });

 $(function() {
    $('#goContact').click(function() {
       $('html, body').animate({
          scrollTop: $('#contact').offset().top
       }, 1000);
    });
 });

 $(function() {
    $('#goDisclaimer').click(function() {
       $('html, body').animate({
          scrollTop: $('#disclaimer').offset().top
       }, 1000);
    });
 });