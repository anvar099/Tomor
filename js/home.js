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
  infinite: true,
  slidesToScroll: 1,
  nextArrow: ".spring__next-card",
  prevArrow: ".spring__prev-card",
  // responsive: [
  //   {
  //     breakpoint: 992,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
});


// $(".new-products__row").on(
//   "afterChange",
//   function (event, slick, currentSlide) {
//     if (currentSlide == count) {
//       $(".new-products__row").slick("slickPause");
//       setTimeout(function () {
//         $(".new-products__row").slick("slickGoTo", 0);
//         // $(".new-products__row").slick("slickPlay");
//       }, autoplaySpeed);
//     }
//   }
// );