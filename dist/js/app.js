$(document).ready(function(){function t(){var t=$(".intro__title"),o=$(".intro__description"),e=$(".intro__store"),i=$(".intro__btn"),s=$(".benefits");if(r.width()>768){var a=r.scrollTop(),c=(n.height()-r.height())/2;t.css({opacity:1-(a/c/1.2+.2)}),o.css({opacity:1-a/c/1.2}),e.css({transform:"translate3d(0,-"+a/c*64+"px,0)"}),i.css({opacity:1-a/c,transform:"translate3d(0,-"+a/c*64+"px,0)"}),s.css({opacity:0+a/(2*c),transform:"translate3d(0,-"+a/c*145+"px,0)"})}else t.css({opacity:1}),o.css({opacity:1}),e.css({transform:"translate3d(0,-0px,0)"}),i.css({opacity:1,transform:"translate3d(0,-0px,0)"}),s.css({opacity:1,transform:"translate3d(0,-0px,0)"})}var r=$(window),n=$(document);/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);!(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))||$("body").addClass("is-ie"),svg4everybody(),$('[href="#"]').click(function(t){t.preventDefault()}),r.on("scroll",throttle(t,5)),r.on("resize",throttle(t,300)),t(),$(".intro__btn").on("click",function(t){return $("body, html").animate({scrollTop:n.height()-r.height()},1e3),!1})});