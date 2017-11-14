$(document).ready(function(){

  //////////
  // Global variables
  //////////

  var _window = $(window);
  var _document = $(document);

  function isRetinaDisplay() {
    if (window.matchMedia) {
      var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
      return (mq && mq.matches || (window.devicePixelRatio > 1));
    }
  }

  var _mobileDevice = isMobile();
  // detect mobile devices
  function isMobile(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      return true
    } else {
      return false
    }
  }

  function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      return true
    } else {
      return false
    }
  }

  if ( msieversion() ){
    $('body').addClass('is-ie');
  }

  //////////
  // COMMON
  //////////

  // svg support for laggy browsers
  svg4everybody();
  //
  // // Viewport units buggyfill
  // window.viewportUnitsBuggyfill.init({
  //   force: true,
  //   hacks: window.viewportUnitsBuggyfillHacks,
  //   refreshDebounceWait: 250,
  //   appendToBody: true
  // });


 	// Prevent # behavior
	$('[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Smoth scroll
	$('a[href^="#section"]').click( function() {
    var el = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(el).offset().top}, 1000);
    return false;
	});


  // TELEPORT PLUGIN
  $('[js-teleport]').each(function (i, val) {
    var self = $(val)
    var objHtml = $(val).html();
    var target = $('[data-teleport-target=' + $(val).data('teleport-to') + ']');
    var conditionMedia = $(val).data('teleport-condition').substring(1);
    var conditionPosition = $(val).data('teleport-condition').substring(0, 1);

    console.log(target);

    
    if (target && objHtml && conditionPosition) {
      _window.on('resize', throttle(function () {
        teleport()
      }, 100));

      function teleport() {
        var condition;

        if (conditionPosition === "<") {
          condition = _window.width() < conditionMedia;
        } else if (conditionPosition === ">") {
          condition = _window.width() > conditionMedia;
        }

        if (condition) {
          target.html(objHtml)
          self.html('')
        } else {
          self.html(objHtml)
          target.html("")
        }
      }
      teleport();
    }
  });

});
