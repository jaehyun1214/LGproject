$(function (){

    $('.nav-btn').click(function () {
        $(this).toggleClass('active');
        $('.gnb-btn').stop().fadeToggle();
    });


    $(".social").mouseover(function () {
        $(".impact-bg1").fadeIn(200);
        $(".impact-bg2").fadeOut(400);
        $(".impact-bg3").fadeOut(400);
    });
    $(".governance").mouseover(function () {
        $(".impact-bg1").fadeOut(400);
        $(".impact-bg2").fadeIn(200);
        $(".impact-bg3").fadeOut(400);
    });
    $(".environmental").mouseover(function () {
        $(".impact-bg1").fadeOut(400);
        $(".impact-bg2").fadeOut(400);
        $(".impact-bg3").fadeIn(200);
    });

    $(document).ready(function (){
        $('.close').click(function (){
           $('.nation-contents').fadeOut(100);
        });

       $('button[name = "kr"]').click(function (){
          $('#kor').fadeIn(100);
       });
        $('button[name = "ch"]').click(function (){
            $('#chn').fadeIn(100);
        });
        $('button[name = "in"]').click(function (){
            $('#ind').fadeIn(100);
        });
        $('button[name = "po"]').click(function (){
            $('#pol').fadeIn(100);
        });
        $('button[name = "sa"]').click(function (){
            $('#sau').fadeIn(100);
        });
        $('button[name = "us"]').click(function (){
            $('#usa').fadeIn(100);
        });
        $('button[name = "br"]').click(function (){
            $('#bra').fadeIn(100);
        });


    });
});

// scroll
$(function () {


    let currentNum = 0;
    let wheelOn = 1;
    const section = $('.section');

    console.log(currentNum);

    function onSection() {

        // $('.header li').removeClass('current');
        // $('.header li').eq(currentNum).addClass('current');
        $('.circle li').removeClass('current').eq(currentNum).addClass('current');

        // $('.section').removeClass('current');
        // $('.section').eq(currentNum).addClass('current');
        $('.section').removeClass('current').eq(currentNum).addClass('current');

        if (currentNum === 0) { // section1

        } else if (currentNum === 1) { // section2

        } else if (currentNum === 2) { // section3

        } else if (currentNum === 3) { // section4

        } else { // section5

        }
    }

    function scrollDown() {
        let scrollNextMove = section.eq(currentNum).next().position().top;

        if (currentNum < section.length) {
            $('.container').stop().animate({scrollTop: scrollNextMove}, 1000, "easeOutBounce", function () {
                currentNum++;
                wheelOn = 1;
                onSection();
            });
        }
    }

    function scrollUp() {
        let scrollPrevMove = section.eq(currentNum).prev().position().top;

        if (currentNum > 0) {
            $('.container').stop().animate({scrollTop: scrollPrevMove}, 1000, "easeOutBounce", function () {
                currentNum--;
                wheelOn = 1;
                onSection();
            });
        }
    }


    $('.section-nm li a').click(function (event) {
        event.preventDefault();
        let sectionNumber = $(this).parent().index();
        // let sectionNumber = $(this).attr('data-link');
        let sectionID = $(this).attr('href');
        currentNum = sectionNumber;
        wheelOn = 0;

        let clickMoveX = $(sectionID).position().top;
        // let clickMoveX = $($(this).attr('href')).position().left;

        $('.container').stop().animate({scrollTop: clickMoveX}, 1000, "easeOutBounce", function () {
            wheelOn = 1;
            onSection();
        });
    });

    $('.container').on('mousewheel', function (event, delta) {

        if (delta > 0 && currentNum === 0 || delta < 0 && currentNum === section.length - 1) {
            return false;
        }

        if (wheelOn === 1) {
            if (delta < 0) {
                if (currentNum < section.length) {
                    wheelOn = 0;
                } else {
                    wheelOn = 1;
                }
                scrollDown();
            } else {
                if (currentNum > 0) {
                    wheelOn = 0;
                } else {
                    wheelOn = 1;
                }
                scrollUp();
            }
        }
    });
});