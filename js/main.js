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
    
    // const imgs = ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg",
    //              "007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","012.jpg",
    //              "013.jpg","014.jpg","015.jpg","016.jpg","017.jpg","018.jpg"]
    // let tags = "";
    // let nums = 0;

    // for(let i =0; i <=5; i++){
    //     tags += `<div class = "box">`;
    //     for(let n=0; n <=2; n++){
    //         tags += `<div class = "fadebox">
    //                     <img src="images/pd/${imgs[nums]}" alt="${imgs[nums]}">
    //                     <div class="text-box">
    //                         <div class="btn">WIDE SLACKS</div>
    //                         <h1>[MADE IN KOREA]</h1>
    //                         <p>4가지 컬러, 2가지 디자인, 3가지 기장으로 준비했지만 품절!</p>
    //                     </div>
    //                 </div>`;
    //         nums++;
    //     }
    //     tags += `</div>`;
    // }

    // $('.slider').html(tags);

    
        $.getJSON("js/data.json", (data)=>{
            let tags = "";

            //json 데이터를 이용하여 루프를 돌며 html을 생성
            $.each(data, (index,item)=>{
                tags += `<div class = "box">`;
                $.each(item.images,(i, img)=>{
                    tags += `<div class = "fadebox">
                                <img src = "images/pd/${img}" alt="${img}">
                                <div class = "text-box">
                                    <div class = "btn">${item.category}</div>
                                    <h1>${item.origin}</h1>
                                    <p>${item.desc}</p>
                                </div>
                            </div>`;
                });
                tags += `</div>`;
            });

            //동적으로 생성한 html을 .slider애 추가
            $('.slider').html(tags);

            //slick 초기화 (생성한 html을 slick에 담기)
            initSlick();
        });

    function initSlick(){

    let slider = $(".slider");
    let innerSlider = $(".box");


    /********slick*********/
    slider.slick({
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '80px',
        autoplay: true,
        autoplaySpeed: 6000,
        dots:true,
        prevArrow: '<button type="button" class="prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="next"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 600,
            slidesToShow: 1,
            slideToScroll:1
          }  
        ]
    });


    innerSlider.slick({
        speed:600,
        fade:true,
        infinite:true,
        autoplay:true,
        autoplaySpeed:2000,
       dots : false,
       arrows : false
    });
   }

   //list click
   $('.list-btn').on('click',function(e){
        e.preventDefault();
        const dataList = $(this).data("list");
        $('.list-btn').removeClass('act');
        $(this).addClass('act')

        $("#row").children().removeClass(function(index, className){
            return (className.match(/col-md-\d+/g) || []).join('');
        }).addClass(dataList);

        /* className.match(/col-md-\d+/g)  className 에서 col-md-숫자 형식의 모든 클래스를 찾아 배열로 반환
        ||[]  만약 col-md-숫자에 매칭되는 게 없을 경우 null을 반환 하기 때문에 null.join(' ')은 에러 발생
        따러서 []를 이용하여 null일 경우 빈 배열로 반환되도록 함. 
        match()의 결과는 ['col-md-3', 'col-md-5'...] 형식의 배열로 반환되기 때문에 join(' ')로 공백을 기준으로
        하나의 문자열이 되게 함. 즉 class="col-md-3 col-md-12" 쌍따옴표 안처럼 하나의 문자열로 쓰여지게 함
        사실은 col-md-는 하나의 클래스만 받지만 이 역시 하나의 배열로 들어옴.
        */
    
   });

    //퀵 메뉴 만들기
   $(window).scroll(function(){
    // console.log($(this).scrollTop()); 스크롤 했을 때의 위치값을 콘솔에서 보여줌
    if($(this).scrollTop() > 900) {
        const w = $('.container').width(); //container의 width 값, 1110
        const left = $('#main>.container').offset().left; //왼쪽 0 부터 381.5 떨어짐
        const right = w + left + 40;  // 1531.5
        //console.log(right);
        $(".quick").css('left', right + "px");
        $(".quick").addClass('act');
    }else{
        $(".quick").removeClass('act');
    }
   });

}); //query

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

