$(document).ready(function(){
    setInterval(slideUp, 2000);

    $(".hittext").click(function(){
        let hitborder = $(".hittext").css('border-bottom-style');
        if(hitborder == 'solid'){
            $('.hittext').css('border','none')
        } else{
            $('.hittext').css('border-bottom','1px solid #999');
        }
        // colsole.log(hitborder) //result = solid

        $(".hitbox").toggle();
    });

    $(".h-bar").click(function(){
        if($(this).hasClass('click')){
            $('.h-bar').css({
                backgroundColor:'transparent'
            });
            $('.bar1, .bar2, .bar3').css("background-color","#222")
        }else{
            $('.h-bar').css({
                backgroundColor:'#fff'
            });
            $('.bar1, .bar2, .bar3').css("background-color","rgb(255, 100, 140)")
        };
        
        $(this).toggleClass("click");
        $(".nav-all").fadeToggle();
    });

    $(".main>li").hover(function(){
        $(this).find(".sub").fadeToggle(200);
    });

    $(".d-search i").click(function(){
        if($('.m-search').hasClass('input-wide')){
            $('.m-search').attr('placeholder',"");
        }else{
            $('.m-search').attr('placeholder','검색...');
        }
        $('.m-search').toggleClass('input-wide');
    });
     
});

function slideUp(){
    $(".hittext-in").animate({
        top: '-25px'
    },300,function(){
        $('.hittext-in div:eq(0)').clone().appendTo('.hittext-in');
        //첫번째 박스 복제해서 부모 제일 뒤에 붙인다.
        $('.hittext-in div:eq(0)').remove();
        //첫번째 박스 삭제
        $('.hittext-in').css('top', 0);
        //top을 0으로 초기화
    });
};//slideup

