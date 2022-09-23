$(document).ready(function(){
    
    // menu
    $("nav>ul>li").hover(function(){
        $(this).find(".sub").stop().slideDown(); 
    },function(){
        $(this).find(".sub").stop().slideUp(); 
    });
    
    // slide
    $(".slideImg").hide().eq(0).show();
    
    var currentIndex = 0;
    
    setInterval(function(){
        
        var next = (currentIndex + 1) % 3;
        
        $(".slideImg").eq(currentIndex).fadeOut();
        $(".slideImg").eq(next).fadeIn();
        
        currentIndex = next;
    },2000);
    
    // tabmenu
    $(".notice").find("h2").click(function(){
        $(".notice h2").removeClass("on");
        $(this).addClass("on");
        $(".notice ul").hide();
        $(this).next("ul").show();
    });
    
    // layer popup
    $(".notice li").eq(0).click(function(){
       $(".layer").show(); 
    });
    
    $(".layer a").eq(0).click(function(){
       $(".layer").hide(); 
    });
    
});