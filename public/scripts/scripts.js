// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

jQuery('img.svg').each(function(){
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

  }, 'xml');

});

// adapt objects
function adaptPage() {
  // header elements have position absolute
  setTimeout(function() {
  });
}
$(document).ready(function() {
  adaptPage();
});
$(window).resize(function() {
  adaptPage();
});

$(window).scroll(function(){
  if( $(window).width() >=768 ) {
    if( $(document).scrollTop() > 100 ) {
      $('header').addClass('scroll');
    }else { 
      $('header').removeClass('scroll');
    }
  } else {
    if( $(document).scrollTop() > 100 ) {
      $('header').addClass('scroll');
    }else { 
      $('header').removeClass('scroll');
    }
  }
});
$('#videolink').magnificPopup({
  type: 'inline',
  midClick: 'true',
});
$(document).ready(function(){
  $('.features').owlCarousel({
    loop: true,
    margin: 30,  
    nav: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    responsive: {
      1000: {
        items: 3,
      }
    }
  });
  $('.screenshots').owlCarousel({
    loop: true,
    margin: 30,  
    nav: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    responsive: {
      1000: {
        items: 3,
      }
    }
  });
  $('.testimonials').owlCarousel({
    loop: true,
    margin: 30,  
    nav: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 8000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      }
    }
  });
});