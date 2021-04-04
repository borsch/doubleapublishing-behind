const display = $('.maincontent');
const sections = $('section');

const $userWindow = $(window).height();

// One page scroll  
$('a[href^="#"]').on('click.smoothscroll',function (e) {
  e.preventDefault();
  var target = this.hash,
  $target = $(target);
  $('html, body').stop().animate( {
    'scrollTop': $target.offset().top
  }, 1000, 'swing', function () {
    window.location.hash = target;
  });
});


// Fixed Menu
$('.nav__prompt').on('click touchstart', function(e) {
  e.preventDefault();
  const $this = $(e.currentTarget);
  $('.nav__item').removeClass('active');
  $this.closest('.nav__item').addClass('active');
});
$(window).scroll(function(){    
  if ($(this).scrollTop() > $userWindow * 0.75){
    $('.fixed-menu').css('opacity', '1');
  } else {
    $('.fixed-menu').css('opacity', '0');
  }
  if ($(this).scrollTop() > 0){
    $('.hero__actions').addClass('fixed--nav');
  } else {
    $('.hero__actions').removeClass('fixed--nav');
  }

  sections.each(function(){
    var $topScroll = $(window).scrollTop() + 10;
    if($topScroll > sections.offset().top) {
      $('.nav__item').removeClass('active');
      $('.item-0').addClass('active');
    }
  })

});

// Price item flip
$('.order--button, .order--reset').on('click', function(e) {
  e.preventDefault();
  const $this = $(e.currentTarget);
  $orderItem = $this.closest('.price__item')
  $orderItem.toggleClass('price__item--order')
})

// Hero change image
var changeImage = function(e) {
  var $dataAttr = $('.hero').attr('data-image')
  var $dataImage = parseInt($dataAttr) + 1;
  $('.hero__bg').removeClass('show');
  if($dataImage <= 3){
    $('.hero').attr('data-image', $dataImage);
    $('.hero__bg_' + $dataImage).addClass('show');
  } else {
    $('.hero').attr('data-image', '1');
    $('.hero__bg_1').addClass('show');
  }
};

/*setInterval(changeImage, 15000);*/
$('.main__img').on('click', changeImage)