
$(document).ready(function($) {
    $('.auto-play').slick({
      dots: true,
      arrows: true,
      infinite: true,
       autoplay: true,
autoplaySpeed: 6000,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false
        }
      },
      {
         breakpoint: 600,
         settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }]
  });
});
$(".card-slider").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(this).removeClass("animated")  
})
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop() + $(window).height(); //pixels to scroll to top + height of visible window
    var elemTop = $(elem).offset().top; //pixels of the top of element from the start of page
    return (elemTop <= docViewTop);
}
isScrolledIntoView("#count-viewed");
var isFuncAlreadyFired = false;
$(window).scroll(function() {
    if(!isFuncAlreadyFired && isScrolledIntoView("#count-viewed"))
    {
        $('.counting').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
          
              duration: 3000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
          
            });  
            
          
          });
        isFuncAlreadyFired = true;
    }
});
$(".card-slider").mouseenter(function(){
  $(this).addClass("animated");        
});


