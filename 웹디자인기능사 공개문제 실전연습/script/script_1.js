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
    
    setInterval(function(){
        if(currentIndex < 2){
            currentIndex++
        }else{
            currentIndex = 0
        }
        
        var slidePosition = currentIndex * (-300)+"px";
        $(".slideList").animate({top:slidePosition},400);
    },3000);
    
    // tab
    $(".noti").find("h3").click(function(){
        $(".noti").find("h3").removeClass("active");
        $(this).addClass("active");
        $(".noti").find("ul").hide();
        $(this).next("ul").show();
    })
    
    // layer_popcup
    $(".notice").find("li").eq(0).click(function(){
       $(".layer").show();
    });
    
    $(".layer a").click(function(e){
        e.preventDefault();
        $(".layer").hide();
    });
    
    
});