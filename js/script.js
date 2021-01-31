$(document).ready(function(){
    $('.clients__slider').slick({
        arrows:false,
        dots: true,
        speed:2000,
        autoplay: true,
        autoplaySpeed:3000,
    });
    $('.staff__slider').slick({
        dots:true,
        arrows:false,
        
    });
    $('.project__slider').slick({
        arrows:false,
        dots: true
    })
});