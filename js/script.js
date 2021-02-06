$(document).ready(function () {
    $('.clients__slider').slick({
    arrows: false,
    dots: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    });
    $('.staff__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    });
    $('.project__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    });
    $('.header__burger').click(function(event){
        $('.header__burger,.burger__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
});
