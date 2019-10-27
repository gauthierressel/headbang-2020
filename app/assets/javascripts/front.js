//= resuire picturefill/picturefill.js
//= require svg4everybody/dist/svg4everybody.js
//= require smoothscroll-for-websites/SmoothScroll.js
//= require aos/dist/aos.js
//= require slick-carousel/slick/slick.min.js
//= require vendors/_debounce.js
//= require front/_modernizr.js
//= require_self
//= require front/_introduction.js
//= require front/_parallax.js

var $win = $(window),
    $doc = $(document),
    $html = $('html'),
    $body = $('body');

svg4everybody();

SmoothScroll({
  stepSize: 100
});

$doc.ready(function() {
  $body.addClass('is-ready');
});

$win.load(function() {
  $body.addClass('is-loaded');

  AOS.init({
    duration: 800,
    offset: 200
  });
});
