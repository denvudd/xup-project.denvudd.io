$(window).on('load', function () {
  window.setTimeout(function () {
    $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
  }, 700);
});
