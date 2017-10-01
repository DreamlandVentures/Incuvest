 
 var scrollButton = $("#scroll-top");
 
 $(window).scroll(function(){
     
     $(this).scrollTop()>=700? scrollButton.show():scrollButton.hide();
     
     scrollButton.click(function()
     {
         $("html,body").stop().animate({scrollTop:0});
         
     });
 });
 

 