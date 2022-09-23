$(document).ready(function(){
   
    // menu
    $("nav>ul>li").mouseover(function(){
        $(".nav_bg").stop().slideDown();
        $(".sub").stop().slideDown();
    });
    
    $("nav>ul>li").mouseout(function(){
        $(".nav_bg").stop().slideUp();
        $(".sub").stop().slideUp();
    });
    
    // slide
    var currentIndex = 0;
    
    setInterval(function(){

        if(currentIndex < 2){
            currentIndex++
        }else{
            currentIndex = 0
        }
        
        var slidePosition = currentIndex * -300 + "px";
        
        $(".slideList").animate({top:slidePosition},400);
    },2000);
    
    // layer popup
    $(".notice li").eq(0).click(function(){
        $(".layer").show();
    });
    
    $(".layer a").click(function(){
        $(".layer").hide();
    });
    
    // family site
    $(".family_site").click(function(){
        $(this).toggleClass("on");
    })
});