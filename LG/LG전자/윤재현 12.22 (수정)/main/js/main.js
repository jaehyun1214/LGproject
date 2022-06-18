$(function () {

    // 메뉴
	$('.nav-btn').click(function () {
		$(this).toggleClass('active');
		$('.gnb-btn').stop().fadeToggle();
	});

// 인기상품
    $('.tab-btn li').click(function () {
        $(this).addClass('appliance').siblings().removeClass('appliance');

        const value = $(this).attr('data-value');
        $('.tabs > div').removeClass('appliance');
        $('#' + value).addClass('appliance');
    });


// 라운지
    $('#slick-slide00').addClass('slick-active');
	$('.lounge-slide-wrapper').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.fa-chevron-left'),
		nextArrow: $('.fa-chevron-right'),
		dots: true,
		arrows: true,
		autoplay: false,
		centerMode: false,
		variableWidth: true,
		speed: 1000,
		vertical: false,
		infinite: true,
        initialSlide: 0, //슬라이드 시작순서
	});
    
    $('.lounge-slide-wrapper').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        let calc =((nextSlide + 0.5) / (slick.slideCount - 1)) * 100;
        $('.progress-bar').css('background-size', calc + '% 100%').attr('aria-valuenow', calc);
        starList();
    });
    
    $('.lounge-slide-wrapper').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        starList();
    });
    
    function list01(){
        $('.current-slide-no').text(1);
        // $('.lounge').css('background', '#f7f7f7');
    }
    function list02(){
        $('.current-slide-no').text(2);
        // $('.lounge').css('background', 'darkgreen');
    }
    function list03(){
        $('.current-slide-no').text(3);
        // $('.lounge').css('background', 'rgba(255, 165, 0, 0.62)');
    }
    
    function starList() {
        if($('#slick-slide00').hasClass('slick-active')){
            list01();
        }
        if($('#slick-slide01').hasClass('slick-active')){
            list02();
        }
        if($('#slick-slide02').hasClass('slick-active')){
            list03();
        }
    }

});

// video
$(function (){
   
   let video = document.querySelector('#myVideo');

   $('#play').click(function (){
       video.play();
       $('.main2-bg, .video-text').css({
           opacity : 0
       });
   });

    video.addEventListener('ended', function (){
       $('.main-2, .main2-bg, #bg, .text1, .text2, #play').css({
           opacity: 1
       });
   });
   
});

// scroll-log
$(window).scroll(function (){
    let height = $(document).scrollTop();
    log(height);
});

function log(str){
    $('#log').text(str);
}

// scroll
$(function (){
   let $device = $('.main-1');
   let $news = $('.news');
    let $contents = $('.contents');
    let $banner = $('.banner');
    let $now = $('.now');

    let $offset = 350;

    let $deviceOST = $device.offset().top - $offset;
    let $newsOST = $news.offset().top - $offset + 400;
    let $contentsOST = $contents.offset().top - $offset;
    let $bannerOST = $banner.offset().top - $offset;
    let $nowOST = $now.offset().top - $offset + 300;

   $(window).scroll(function (){
      if($(this).scrollTop() > $deviceOST){
          $device.find('.box').addClass('animate');
          $device.find('#box2').addClass('animate-box2');
          $device.find('#box3').addClass('animate-box3');
      }
       if($(this).scrollTop() > $newsOST){
           $news.find('#news1').addClass('animate-news1');
           $news.find('#news2').addClass('animate-news2');
           $news.find('#news3').addClass('animate-news3');
       }
       if($(this).scrollTop() > $contentsOST){
           $contents.find('.career-box').addClass('animate');
           $contents.find('.contact-box1').addClass('animate');
           $contents.find('.contact-box2').addClass('animate');
       }
       if($(this).scrollTop() > $bannerOST){
           $banner.find('.innovation').addClass('animate-innovation');
           $banner.find('.banner-look').addClass('animate');
       }
       if($(this).scrollTop() > $nowOST){
           $now.find('#now1').addClass('animate-now1');
           $now.find('#now2').addClass('animate-now2');
           $now.find('#now3').addClass('animate-now3');
           $now.find('#now4').addClass('animate-now4');
           $now.find('#now5').addClass('animate-now5');
           $now.find('#now6').addClass('animate-now6');
       }
   });
});