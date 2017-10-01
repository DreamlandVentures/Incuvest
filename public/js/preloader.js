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


  //Login Elements
  $('.logout').click(function(){
    window.location='http://localhost:8080';
  });
  $('.modal-footer').click(function() {
    if ($("#uPassword").val() === '') {
      alert('No password');
    } else {
      window.location='http://localhost:8080/profile';
    }

  });
});
