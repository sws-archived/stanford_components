(function (Drupal, $, window) {

  // Execute code once the window is fully loaded.
  $(window).load(function () {
    $('.js-masonry').masonry({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.js-masonry .js-masonry-item',
      percentPosition: true
    })

  });
} (Drupal, jQuery, this));