$(document).ready(function(){
    
    // menu
    $("nav>ul>li").mouseover(function(){
       $(this).find(".sub").stop().slideDown(); 
    });
    $("nav>ul>li").mouseout(function(){
       $(this).find(".sub").stop().slideUp(); 
    });
    
    // slide
    var slideImg = $(".slideImg");
    var currentIndex = 0;
    
    slideImg.hide().eq(0).show();
    
    setInterval(function(){
        
         var next = (currentIndex + 1) % 3; 
        
         slideImg.eq(currentIndex).fadeOut(); slideImg.eq(next).fadeIn();
        
         currentIndex = next;
        
         // console.log(currentIndex);
        
    },3000)
    
    // tabmenu
    $(".notice").find("h2").click(function(){
        $(".notice").find("h2").removeClass("active");
        $(this).addClass("active");
        $(".notice").find("ul").hide();
        $(this).next("ul").show();
    });
    
    // layer popup
    $(".notice").find("li").eq(0).click(function(){
        $(".layer").show();
    });
    
    $(".layer a").click(function(){
        $(".layer").hide();
    });
    
});