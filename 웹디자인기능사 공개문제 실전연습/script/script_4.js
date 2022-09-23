$(document).ready(function(){
    
    // menu
    $("nav>ul>li").hover(function(){
        $(".nav_bg").stop().slideDown();
        $(".sub").stop().slideDown();
    },function(){
        $(".nav_bg").stop().slideUp();
        $(".sub").stop().slideUp();
    });
    
    // slide
    $(".slideImg").hide().eq(0).show();
    
    var currentIndex = 0;
    
    setInterval(function(){
        
        var next = (currentIndex + 1) % 3;
        
        $(".slideImg").eq(currentIndex).fadeOut();
        $(".slideImg").eq(next).fadeIn();
        
        currentIndex = next
           
    },3000);
    
    // layer popup
    $(".notice").find("li").eq(0).click(function(){
       $(".layer").show(); 
    });
    
    $(".layer a").click(function(){
       $(".layer").hide(); 
    });
    
    // family site
    $(".family").click(function(){
       $(this).toggleClass("on"); 
    });
    
    
    
});