$(document).ready(function(){
    $('.header__container').css('display','none');
    $('.header__container').fadeIn(2000);
    $('.hamburger-box').click(function(){
        $('.hamburger').toggleClass('is-active');
        $('.sidebar').toggleClass('is-open');
    });
});
