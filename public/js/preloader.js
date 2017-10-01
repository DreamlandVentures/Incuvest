// Loading Screen

$(window).load(function() {

  "use strict";

  // Loading Elements

  $(".loading-overlay .spinner").fadeOut(2000, function() {

    // Show The Scroll

    $("body").css("overflow", "auto");

    $(this).parent().fadeOut(2000, function() {

      $(this).remove();
    });
  });
  $('#pinatalink').click(function(){
    window.location='https://incuvest-181515.appspot.com/pinatafc';
  });
  $('#kidmotolink').click(function(){
  window.location='https://incuvest-181515.appspot.com/kidmoto';
  });
  $('#flydoclink').click(function(){
    window.location='https://incuvest-181515.appspot.com/flydoc';
  });
  //Login Elements
  $('.logout').click(function(){
    window.location='https://incuvest-181515.appspot.com';
  });
  $('.modal-footer').click(function() {
    if ($("#uPassword").val() === '') {
      alert('No password');
    } else {
      window.location='https://incuvest-181515.appspot.com/profile';
    }

  });
});
