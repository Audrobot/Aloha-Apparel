$(function() {
$('.main-carousel').flickity({
  cellAlign: 'left',
  contain: true,
  wrapAround: true
  })
});

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000, function() {
      });
    }
  }
});

$('form').submit(function(event) {
  event.preventDefault();
  if ( $('input').val() == '' ) {
     alert('Please submit a valid email address.');
  } else {
     alert('Thanks for subscribing!');
  }
});
