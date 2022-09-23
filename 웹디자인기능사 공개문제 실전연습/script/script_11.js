$(document).ready(function(){

    // menu
    $("nav>ul>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(this).find(".sub").stop().slideUp();
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
    
});