$(function() {

  var main = {

    smoothScroll: function(){
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1500);
            return false;
          }
        }
      });
    },

    noTouch: function(){
      var touch = 'ontouchstart' in document.documentElement
            || (navigator.MaxTouchPoints > 0)
            || (navigator.msMaxTouchPoints > 0);

      if (touch) { // remove all :hover stylesheets
          try { // prevent exception on browsers not supporting DOM styleSheets properly
              for (var si in document.styleSheets) {
                  var styleSheet = document.styleSheets[si];
                  if (!styleSheet.rules) continue;

                  for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                      if (!styleSheet.rules[ri].selectorText) continue;

                      if (styleSheet.rules[ri].selectorText.match(':hover')) {
                          styleSheet.deleteRule(ri);
                      }
                  }
              }
          } catch (ex) {}
      }
    },

    init: function(){
      main.smoothScroll();
      // main.noTouch();
    },
  }

  main.init();

});