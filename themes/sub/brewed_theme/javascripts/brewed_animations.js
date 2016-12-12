(function($) {
  Drupal.behaviors.animations = {
     attach: function (context, settings) {
      $(document).ready(function(){
        $(window).scroll(function () {
          // $("#navbar .navbar-collapse.collapse ul li a").toggleClass("circle", $(this).scrollTop() > 100)
        });
      });
     }
  };
})(jQuery);
