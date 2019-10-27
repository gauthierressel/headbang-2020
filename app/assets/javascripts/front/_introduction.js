// Introduction

$(function() {
  'use strict';

  var $background = $('.js-introduction-background'),
      $heading    = $('.js-introduction-heading'),
      winHeight   = $win.outerHeight();

  function updateIntroduction() {
    var scrollTop = $win.scrollTop(),
        opacity   = 1 - (scrollTop / winHeight * 1.5),
        translate = - scrollTop / 8;

    $background.css('opacity', opacity);
    $heading.css('transform', 'translate3d(' + translate + 'px, 0, 0)');
    $heading.css('opacity', opacity);
  }

  $win.on('scroll', function() {
    updateIntroduction();
  });

  updateIntroduction();

});
