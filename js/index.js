$('#menu li a').on('click', function() {
    let line = $(this).parent().index()
    let sectdist = $('section').eq(line).offset().top
    
    $('html, body').animate({
        scrollTop:sectdist
    }, 500)
    return false
})

function graph(jumsu, cname, time) {
    let num = 0;
    let stop = setInterval(function(){
        num++
        if ( num<=jumsu ) {
            $(cname).css({
                width:num+'%'
            })
            $(cname).text(num+'%')
        } else {
            clearInterval(stop)
        }
    }, time)
}


var sect1, sect2, sect3, sect4, sect5;
function sect(){
    sect1 = $('section').eq(0).offset().top
    sect2 = $('section').eq(1).offset().top
    sect3 = $('section').eq(2).offset().top
    sect4 = $('section').eq(3).offset().top
    sect5 = $('section').eq(4).offset().top
}
sect()

$(window).resize(function(){
    sect()
})

$(window).on('scroll', function(){
    let sct = $(this).scrollTop()
    if (sct>0 && sct<sect2) {
        $('#menu li').eq(0).addClass('on').siblings().removeClass('on')
        $('.title').removeClass('on')
        $('.myscore').css({
            height:'0%'
        })
    } else if (sct>=sect2 && sct<sect3 ) {
        $('#menu li').eq(1).addClass('on').siblings().removeClass('on')
        $('.title').addClass('on')
        if ( !$('#sect2').hasClass('on') ) {
            $('#sect2').addClass('on')
            graph(80, '.photo', 15)
            graph(85, '.illur', 16)
            graph(80, '.html', 17)
            graph(75, '.css', 18)
            graph(65, '.js', 19)
            graph(65, '.jq', 20)
        }
    } else if (sct>=sect3 && sct<sect4) {
        $('#menu li').eq(2).addClass('on').siblings().removeClass('on')
        $('.title').addClass('on')
    } else if (sct>=sect4 && sct<sect5) {
        $('#menu li').eq(3).addClass('on').siblings().removeClass('on')
    } else if (sct>=sect5) {
        $('#menu li').eq(4).addClass('on').siblings().removeClass('on')
    }
})


$('section').on('mousewheel', function(e, delta){
    // 위로 delta : 1
    // 아래로 delta : -1
    if (delta>0) {
        var prevTop = $(this).prev().offset().top
        $('html, body').stop().animate({
            scrollTop:prevTop+'px'
        }, 500)
    } else if (delta<0) {
        var nextTop = $(this).next().offset().top
        $('html, body').stop().animate({
            scrollTop:nextTop+'px'
        }, 500)
    }
})


$('.slide-group').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 2.5,
    prevArrow:'<button class="arrleft"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="arrright"><i class="fas fa-angle-right"></i></button>',
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 768,
        settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
        centerMode: true,
        centerPadding: '40px', 
        slidesToShow: 1
        }
    }
    ]
})


$('.outtext').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 768,
        settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
        centerMode: true,
        centerPadding: '40px', 
        slidesToShow: 1
        }
    }
    ]
})