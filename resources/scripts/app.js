jQuery(document).ready(function(){
jQuery('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        centerPadding: '180px',
      }
    },
    {
      breakpoint: 800,
      settings: {
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 600,
      settings: {
        centerPadding: '60px',
      }
    }
  ]
});
AOS.init();
});