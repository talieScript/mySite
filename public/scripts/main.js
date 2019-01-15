  $(window).on("load", function(){
      $(".loader").fadeOut(1000);
  })
  
$('document').ready(function(){
    typeInit();
    sliderInit();
    owlCarouselInit();

    $(window).on("scroll", onScroll);
    const skillSTop = $('#skills').offset().top;    
    const navTop = $('#nav').offset().top;
    function onScroll() {
        var body = $("body");
        if($(window).scrollTop() >= navTop) {
            body.addClass("fixedNav")
            body.css("padding-top", $('#nav').outerHeight() + "px")
        } else {
            body.removeClass("fixedNav")
            body.css("padding-top", 0)
        }
        if(window.pageYOffset > skillSTop - $(window).height() + 450 ){
            pieChartInit();
        }
    }
    $('.special.cards .image').dimmer({
        on: 'hover'
      });
      var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
   
});

function sliderInit() {
    $('#slides').superslides({
        play: 4000,
        animation: "fade"
    })
};
function typeInit() {
	var typed = new Typed(".typed", {
        strings: ["Taliesin Bowes", "Talie Bowes", "Tally", "Web Developer", "Web Developer?"],
		typeSpeed: 110,
        backSpeed: 80,
        backDelay: 2000,
        loop: true,
        cursor: false,
		startDelay: 1000,
		autoInsertCss: true,
	})
};
function owlCarouselInit() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })  
};
function pieChartInit() {
    $('.chart').easyPieChart({
        easing: 'easInOut',
        barColor: '#fff',
        scaleColor: false,
        trackColor: 'red',
        lineWidth: 10,
        size: 152, 
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
};

ScrollReveal({
    reset: true,
    duration: 800
}).reveal('.card1');
ScrollReveal({
    reset: true,
    delay: 200,
    duration: 800
}).reveal('.card2')
ScrollReveal({
    reset: true,
    delay: 400,
    duration: 800
}).reveal('.card3')
ScrollReveal({
    reset: true,
    delay: 600,
    duration: 800
}).reveal('.card4')

$("#nav a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
})
















