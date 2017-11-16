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

 	// Prevent # behavior
	$('[href="#"]').click(function(e) {
		e.preventDefault();
	});

  // SCROLL FUNC
  function revealScroll(){
    var title = $('.intro__title');
    var subtitle = $('.intro__description');
    var btnAppStore = $('.intro__store');
    var btnMore = $('.intro__btn');
    var benefits = $('.benefits');

    if ( _window.width() > 768 ){
      var wScroll = _window.scrollTop();
      var container = _document
      // var scrollPercent = 100 * _window.scrollTop() / ( container.height() - _window.height());
      var scrollMagnifier = (container.height() - _window.height()) / 2


      title.css({
        'opacity': 1 - ((wScroll / scrollMagnifier / 1.2) + 0.2)
      })
      subtitle.css({
        'opacity': 1 - (wScroll / scrollMagnifier / 1.2)
      })

      btnAppStore.css({
        'transform': "translate3d(0,-" + wScroll / scrollMagnifier * 64 + "px,0)"
      })

      btnMore.css({
        opacity: 1 - wScroll / scrollMagnifier,
        'transform': "translate3d(0,-" + wScroll / scrollMagnifier * 64 + "px,0)"
      })

      benefits.css({
        opacity: 0 + wScroll / (scrollMagnifier * 2 ),
        'transform': "translate3d(0,-" + wScroll / scrollMagnifier * 145 + "px,0)"
      })

    } else {
      title.css({
        'opacity': 1
      })
      subtitle.css({
        'opacity': 1
      })

      btnAppStore.css({
        'transform': "translate3d(0,-" + 0 + "px,0)"
      })

      btnMore.css({
        'opacity': 1,
        'transform': "translate3d(0,-" + 0 + "px,0)"
      })

      benefits.css({
        'opacity': 1,
        'transform': "translate3d(0,-" + 0 + "px,0)"
      })
    }

  };

  _window.on('scroll', throttle(revealScroll, 5));
  _window.on('resize', throttle(revealScroll, 300));

  revealScroll();

  $('.intro__btn').on('click', function(e){
    $('body, html').animate({
        scrollTop: _document.height() - _window.height() }, 1000);
    return false;

    e.preventDefault();
  })

});
