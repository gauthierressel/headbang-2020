// Parallax

$(function() {
  'use strict';


  // Variables
  var $parallax = $('.js-parallax');

  $win.on('load', function() {


    // Init
    $parallax.each(function() {
      var $this = $(this),
          offset = $this.offset().top,
          factors = [2, 3, 4, 5, 6, 7, 8, 9, 10],
          factor  = factors[Math.floor(Math.random()*factors.length)];

      $this.attr('data-parallax-offset', offset);
      $this.attr('data-parallax-factor', factor);
    });


    // Scroll
    $win.on('scroll', function() {

      $parallax.each(function() {
        var $this     = $(this),
            height    = $this.outerHeight(),
            offset    = $this.data('parallax-offset'),
            reference = offset + height / 2,
            scrollTop = $win.scrollTop() + $win.outerHeight() / 2,
            factor    = $this.data('parallax-factor'),
            translate = (reference - scrollTop) / factor;

        $this.css(Modernizr.prefixed('transform'), 'translate3d(0, ' + translate + 'px, 0)');
      });
    });

  });

});
