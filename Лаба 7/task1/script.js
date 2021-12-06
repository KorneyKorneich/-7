$(function() {
    $('.up').click(function() {

      $("html, body").animate({
        scrollTop:0
      },1000);
    })
  })
$(window).scroll(function() {
  if ($(this).scrollTop()>50) {
    $('.up').fadeIn();
  }
  else {
    $('.up').fadeOut();
  }
});