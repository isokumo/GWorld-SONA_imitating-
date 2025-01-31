$(document).ready(function(){
   setInterval(slideUp, 2000);
});

function slideUp(){
    $(".hittext-in").animate({
        top: '-25px'
    },300, function(){
        $('.hittext-in div:eq(0)').clone().appendTo('.hittext-in'); //첫 번째 박스를 복제해서 부모의 제일 뒤에 붙인다. clone, appendTo
        $('.hittext-in div:eq(0)').remove(); //첫 번째 박스를 삭제
        $('.hittext-in').css('top', 0); //top 을 0으로 초기화
    });
}