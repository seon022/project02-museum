
// * 브라우저 크기 변경 이벤트
$(window).resize(function(){
    moSideScroll();
});
  

//  * 모바일 - 탑배너 닫기
$('.tbClose p').click(function(){
    $('#topBn').stop().slideUp();
});


//  * 모바일 - 사이드  

$('.gnb > div').html($('.f_gnb > ul').clone());
$('.mo_side_gnb').html($('.f_gnb > ul').clone());

//  * 모바일 - 사이드 열기
$('.allMenu').click(function(){
    $('#mo_side').stop().animate({left: 0})
});

//  * 모바일 - 사이드 닫기
$('.mo_side_close').click(function(){
    $('#mo_side').stop().animate({left: '100%'})
});

//  * 모바일 - 사이드 아코디언
moSideScroll();
$('.mo_side_gnb .d1 .a1').click(function(e){
    e.preventDefault();
    let disp = $(this).siblings('.d2').css('display');
    if(disp == 'none'){
        $('.mo_side_gnb .d1 .a1').removeClass('active');
        $('.mo_side_gnb .d2').stop().slideUp(200);
        $(this).addClass('active');
        $(this).siblings('.d2').slideDown(200, function(){
            moSideScroll();
        }); 
    } else {
        $('.mo_side_gnb .d1 .a1').removeClass('active');
        $('.mo_side_gnb .d2').stop().slideUp(function(){
            moSideScroll();
        });
    }
});

// *본문 1 메인슬라이드 슬릭
$('.mainslide_wrap').slick({
    autoplay : true,
    autoplaySpeed : 2000,
    speed : 300,
    dots : true,
    appendDots : '.msdots',
    prevArrow : '.ms_prev',
    nextArrow : '.ms_next'
});

// *본문 1 메인슬라이드 멈춤 재생
$('.ms_btn .stop').click(function(){
    $(this).hide();
    $('.ms_btn .play').show();
    $('.mainslide_wrap').slick('slickPause');
});

$('.ms_btn .play').click(function(){
    $(this).hide();
    $('.ms_btn .stop').show();
    $('.mainslide_wrap').slick('slickPlay');
});


// * 본문 3 전시 슬릭
    $('.m3_mo_list').slick({
        slidesToShow : 2,
        slidesToScroll : 2,
        prevArrow : '.m3In .prev',
        nextArrow : '.m3In .next'
    });

// *본문3 슬라이드 멈춤 재생
$('.main3 .stop').click(function(){
    $(this).hide();
    $('.main3 .play').show();
    $('.m3_mo_list').slick('slickPause');
});

$('.main3 .play').click(function(){
    $(this).hide();
    $('.main3 .stop').show();
    $('.m3_mo_list').slick('slickPlay');
});

// * 본문 6 온라인전시관
$('.main6 .slickList').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow : 2,
    slidesToScroll : 1,
    prevArrow : '.m6In .prev',
    nextArrow : '.m6In .next'
});
// *본문 6  멈춤 재생
$('.main6 .stop').click(function(){
    $(this).hide();
    $('.main6 .play').show();
    $('.slickList').slick('slickPause');
});

$('.main6 .play').click(function(){
    $(this).hide();
    $('.main6 .stop').show();
    $('.slickList').slick('slickPlay');
});












//  * 모바일 사이드 스크롤바
function moSideScroll(){
    let moSideH = $('#mo_side').height();
    let moSideInH = $('.mo_side_in').height();
    if(moSideH >= moSideInH){
        $('#mo_side').css('overflow-y', 'visible');
    } else {
        $('#mo_side').css('overflow-y', 'scroll');
    }
};