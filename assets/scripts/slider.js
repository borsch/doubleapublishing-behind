$('.screen-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true
});

$('.price-slider').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    loop: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
             slidesToShow: 2,
             dots: true,
             centerMode: false
            }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: true,
            centerMode: true
          }
        }
    ]
});