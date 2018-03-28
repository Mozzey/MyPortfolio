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

    window.sr = ScrollReveal({ reset: true });
    // NAV
    sr.reveal('.leftSlide', {
        duration: 2000,
        distance: '50px',
        origin: 'left',
        mobile: true,
        reset: false
    });
    // HEADER TITLE
    sr.reveal('.headerName', {
        duration: 800,
        delay: 600,
        origin: 'top',
        mobile: true,
        scale: 0.5,
        easing: 'ease-in',
        opacity: 0,
        rotate: { x: 0, y: 150, z: 0}
    });
    // HEADER PARAGRAPH
    sr.reveal('.headerP', {
        duration: 900,
        delay: 900,
        origin: 'bottom',
        mobile: true,
        scale: 0.5,
        easing: 'ease-in',
        opacity: 0,
        rotate: { x: 200, y: 0, z: 0 }
    });
    // READ MORE BTN
    sr.reveal('.btn', {
        duration: 900,
        delay: 1200,
        distance: '50px',
        origin: 'bottom',
        mobile: true,
        easing: 'ease-in',
        opacity: 0
    });
    // SECTION TITLES
    sr.reveal('.sectionTitle', {
        duration: 1000,
        distance: '50px',
        origin: 'top',
        mobile: true,
        easing: 'ease-in'
    });
    // ABOUT CARDS
    sr.reveal('.about1', {
        duration: 900,
        distance: '70px',
        origin: 'top',
        mobile: true,
        easing: 'ease-in'
    });
    sr.reveal('.about2', {
        duration: 900,
        distance: '70px',
        origin: 'bottom',
        mobile: true,
        easing: 'ease-in'
    });
    sr.reveal('.about3', {
        duration: 900,
        distance: '70px',
        origin: 'top',
        mobile: true,
        easting: 'ease-in'
    });
    sr.reveal('.progress-bar', {
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
        mobile: true,
        easing: 'ease-in'
    });
    sr.reveal('.proj1', {
        duration: 1000,
        distance: '80px',
        origin: 'left',
        mobile: true,
        easing: 'ease-in'
    });
    sr.reveal('.proj2', {
        duration: 1000,
        distance: '80px',
        origin: 'left',
        mobile: true,
        easing: 'ease-in'
    });

});

$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});

