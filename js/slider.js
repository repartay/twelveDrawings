




$(document).ready(function(){
  function runSlider() {
    if ($(window).width() > 499 ) {
        $('.carouselInnerWrapper').slick({
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 6,
          slidesToScroll: 1,
          responsive: [
              {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: true
                }
              },
              {
                 breakpoint: 900,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                  }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                  }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
        ]
      });
    } else {
      $('.carouselInnerWrapper').slick('unslick');
    }
  }
  
  runSlider();

  // usage:
  $(window).smartresize(function(){
    runSlider();
  });
});