$(function () {
  //первый слайдер
  $('.tour__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: '<button class="slick-next"><svg width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.999998L22.5057 20.2655C23.8367 21.4579 23.8367 23.5421 22.5057 24.7345L0.999998 44" stroke="#0499DD" stroke-width="2"/></svg>',
    prevArrow: '<button class="slick-prev"><svg width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0.999998L2.49433 20.2655C1.16332 21.4579 1.16333 23.5421 2.49433 24.7345L24 44" stroke="#D4D4D4" stroke-width="2"/></svg>',
    centerPadding: '0',
    variableWidth: true,
    dots: true,
    infinite: false,
  });

  //липкая шапка
  $(window).scroll(function () {
    $scrollPosition = $(window).scrollTop();
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
  });
});