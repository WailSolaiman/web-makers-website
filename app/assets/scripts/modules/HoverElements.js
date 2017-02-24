import $ from 'jquery';

class HoverElements {
  constructor() {
    this.skills = $(".skills");
    this.underlineShorter = $(".underline--shorter");
    this.worksContainer = $(".works__container");
    this.hoverOver();
  }

  hoverOver() {
    this.skills.hover(function() {
      $(this)
        .toggleClass('skills--change-background-color')
        .children()
        .toggleClass('skills--hover-color');

      $(this)
        .children('.underline--shorter')
        .toggleClass('underline--hover-width');
    });
    this.worksContainer.hover(function() {
      $(this)
        .children('img')
        .toggleClass('works--is-dark')
        .toggleClass('works--image-zoom');
      $(this)
        .children('img')
        .siblings('div')
        .children('h3')
        .toggleClass('works--is-displayed')
        .toggleClass('works--transition-delay-first');
      $(this)
        .children('img')
        .siblings('div')
        .children('p')
        .toggleClass('works--is-displayed')
        .toggleClass('works--transition-delay-second');
    });
  }
}

export default HoverElements;
