$(function(){
    /* 내비 메인에 마우스 닿으면 서브메뉴 보이게 */
    $('.main').mouseenter(function(){
        $('.subMenu, #subBack').stop().slideDown(300);
    })
    
    $('.main').mouseleave(function(){
        $('.subMenu, #subBack').stop().slideUp(200);    
    });
    
    
    /* 공지사항 첫번째 클릭하면 모달창 보이게 */
    $('.text').eq(0).click(function(){
       $('#modal').css('display','flex'); 
    });
    
    $('#modalClose').click(function(){
       $('#modal').fadeOut(300); 
    });
    
});
