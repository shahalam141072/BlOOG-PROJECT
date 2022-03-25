// blog slider or service section slider
$(function(){
  $('.blog_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    nextArrow:'.next',
    prevArrow:'.right',
    autoplaySpeed: 2000,
   

  });


  // next prev slider
  // $('.nxt_prev_slider').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   arrows:true,
  //   nextArrow:'.nxt',
  //   prevArrow:'.prev',
  //   autoplaySpeed: 2000,
   

  // });


  // aos file js 

 
  AOS.init();
 


});


 
