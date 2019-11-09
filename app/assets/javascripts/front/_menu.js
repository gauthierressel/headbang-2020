// Menu

$(function() {
  'use strict';


  // Variables
  var $toggle = $('.js-toggle-menu'),
      $menu   = $('.js-menu');


  // Actions
  $toggle.on('click', function() {
    $body.toggleClass('menu-opened');
  });

});
