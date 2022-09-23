$(document).ready(function(){
   
    // menu
    $("nav>ul>li").hover(function(){
        $(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    });
    
    // slide
    var currentIndex = 0;
    var slideCount = $(".slideImg").length;
    // console.log(slideCount);
    
    setInterval(function(){
       
        if(currentIndex < 2){
            currentIndex++
        }else{
            currentIndex = 0
        }
        
        var slidePosition = currentIndex * (-100) + "%";
        
        $(".slideList").animate({left:slidePosition},400);  
        
    },3000);
    
    // tabmenu
    $(".notice h2").click(function(){
        $(".notice h2").removeClass("on");
        $(this).addClass("on");
        $(".notice").find("ul").hide();
        $(this).next("ul").show();
    });
    
    // layer popup
    $(".notice li").eq(0).click(function(){
        $(".layer").show();                  
    });
    
    $(".layer a").click(function(){
        $(".layer").hide();                  
    });
    
});