
 var scrollButton = $("#scroll-top");

 $(window).scroll(function(){

     $(this).scrollTop()>=700? scrollButton.show():scrollButton.hide();

     scrollButton.click(function()
     {
         $("html,body").stop().animate({scrollTop:0});

     });
 });


 function SetActiveGlyphStep(stepNumber) {
    $steps = $('.glyphstep');
    if (stepNumber !== parseInt(stepNumber) || stepNumber < $steps.length || stepNumber > $steps.length) {
        stepNumber = 1;
    }
    $('.glyphstep').each(function(index){
        if (index < stepNumber) {
            $(this).removeClass('glyphactive');
            $(this).removeClass('glyphcomplete');
            $(this).addClass('glyphcomplete');
        } else if (index == stepNumber) {
            $(this).removeClass('glyphactive');
            $(this).removeClass('glyphcomplete');
            $(this).addClass('glyphactive');
        } else {
            $(this).removeClass('glyphactive');
            $(this).removeClass('glyphcomplete');
        }
    });
}
$(document).ready(function(){
SetActiveGlyphStep(3);
});
