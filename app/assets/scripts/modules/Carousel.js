import $ from 'jquery';

class Carousel {
  constructor() {
    this.startSlider();
  }

  startSlider() {
    this.speed = 500;
    this.autoswitch = true;
    this.autoswitchSpeed = 4000;

    //Add initial active class
    $('.sayings__mySlides').first().addClass('active');

    //Hide all Slides
    $('.sayings__mySlides').hide();

    //Show first Slide
    $('.active').show();

    if (this.autoswitch == true) {
      setInterval(function(){
        $('.active').removeClass('active').addClass('oldActive');

        if ($('.oldActive').is(':last-child')) {
          $('.sayings__mySlides').first().addClass('active');
        } else {
          $('.oldActive').next().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');
        $('.sayings__mySlides').fadeOut(this.speed);
        $('.active').fadeIn(this.speed);
      }, this.autoswitchSpeed)
    }
  }
}

export default Carousel;
