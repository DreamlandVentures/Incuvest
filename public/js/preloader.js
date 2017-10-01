// Loading Screen

$(window).load(function () {

    "use strict";

    // Loading Elements

    $(".loading-overlay .spinner").fadeOut(2000, function () {

        // Show The Scroll

        $("body").css("overflow", "auto");

        $(this).parent().fadeOut(2000, function () {

            $(this).remove();
        });
    });
});
