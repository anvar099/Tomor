$(".new-products__row").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 1,
  nextArrow: ".next__card",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".spring__slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  rows: 2,
  infinite: true,
  slidesToScroll: 1,
  nextArrow: ".spring__next-card",
  prevArrow: ".spring__prev-card",
responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
],
});

$(".designers__row").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  infinite: true,
  arrows: true,
  nextArrow: ".favourite__next-arrow",
  prevArrow: ".favourite__prev-arrow",
  slidesToScroll: 1,
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

var swiperClassic = new Swiper(".swiperClassic", {
  loop: true,
  navigation: {
    nextEl: ".classic__next-arr ",
    prevEl: ".classic__prev-arr ",
  },
  breakpoints: {
    768: {
      slidesPerView: "auto",
    },
  },
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   grid: {
//     rows: 2,
//   },
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
