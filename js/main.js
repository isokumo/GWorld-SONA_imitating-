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
            $('.m-search').attr('placeholder','검색...').focus();
        }
        $('.m-search').toggleClass('input-wide');
    });

    //접속 상태를 확인하는 두 가지 방법
    /*
     1. media (브라우저 화면 크기를 확인)
        if(window.matchMedia("(max-width: 768px)").matches){
          $('.col-nav').click(function(){
         $(this).find(".nav").stop().slideToggle(300);    
         });       
        }
        >> 이렇게 하면 처음 켜진 상태에서 한 번만 읽기 때문에
            켜진 후에는 화면크기를 바꿔도 적용이 안 됨!
      
     2. 접속한 디바이스의 종류 (navigator.userAgent)
      
        if(/Mobi|Android|iPone|iPad|iPod/i.test(navigator.userAgent)){
         $('.col-nav').click(function(){
         $(this).find(".nav").stop().slideToggle(300);    
         });
        }
        >> 이렇게 하면 지금 웹브라우저에서는 모바일 상태를 못 봄!
      
     */

    $('.col-nav').click(function(){
        $(this).find(".nav").stop().slideToggle(300);    
    });
    


    /********slick*********/
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px',
        autoplay: true,
        autoplaySpeed: 3000,
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

