$(document).ready(function() {
    $('.menu-icon').on('click', function() {
        $('nav ul').toggleClass('showing');
    });

    $('.html').animate({width:'80%'}, 3000);
    $('.css').animate({width:'70%'}, 3000);
    $('.sass').animate({width:'60%'}, 3000);
    $('.js').animate({width:'60%'}, 3000);
    $('.resp').animate({width:'80%'}, 3000);
    $('.node').animate({width:'40%'}, 3000);
});

$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
})

