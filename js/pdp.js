$(".s__products-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: ".s__arrow-left",
  nextArrow: ".s__arrow-right",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});


$(".s__products-sagestion").slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: ".s__arrow-left__saggest",
  nextArrow: ".s__arrow-right__saggest",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});


var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  direction: "vertical",
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});