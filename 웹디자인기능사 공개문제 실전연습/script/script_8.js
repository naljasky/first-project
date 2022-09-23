$(document).ready(function(){
   
    // menu
    $("nav>ul>li").hover(function(){
        $(".nav_bg,.sub").stop().slideDown();
    },function(){
        $(".nav_bg,.sub").stop().slideUp();
    });
    
    // slide
    var currentIndex = 0;
    
    setInterval(function(){
       
        if(currentIndex < 2){
            currentIndex++;
        }else{
            currentIndex = 0;
        }
        
        var slidePosition = currentIndex * (-100) + "%";
        
        $(".slideList").animate({left:slidePosition},400)
    },3000);
    
    // layer popup
    $(".notice li").eq(0).click(function(){
       $(".layer").show(); 
    });
    
    $(".layer a").click(function(){
       $(".layer").hide(); 
    });
    
    // family site
    $(".family").click(function(){
        $(this).toggleClass("on");
    })
    
    
});