$(function() {
  /* Fixed Header */
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  
  checkScroll(scrollPos, introH);

  $(window).on("scroll resize", function() {
      introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();
      
      checkScroll(scrollPos, introH);
  });
  
  function checkScroll(scrollPos, introH) {
      if( scrollPos > introH ) {
          header.addClass("fixed");
      } else {
          header.removeClass("fixed");
      }
  }
});