import $ from 'jquery';

class RevealOnLoad {
  constructor() {
    this.subtitle = $(".absolute-section--uppercase");
    this.title = $(".absolute-section__title");
    this.underline = $(".underline:first");
    this.underTitle = $(".absolute-section--margin-top");
    this.button = $(".btn:first");
    this.loadContents();
  }

  loadContents() {
    this.subtitle.fadeIn(1500);
    this.title.slideDown(1200);
    this.underline.hide(2000).delay(1000).show(800);
    this.underTitle.show(1000);
    this.button.fadeIn(1000);
  }
}

export default RevealOnLoad;
