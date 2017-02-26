import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".absolute-section--uppercase");
    this.siteHeaderLogo = $(".site-header__logo");
    this.createHeaderWaypoint();

    this.headerLinks = $(".primary-nav a");
    this.pageSection = $(".page-section");

    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSection.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction = "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "15%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction = "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    })
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
          that.siteHeaderLogo.addClass("site-header__logo--smaller-logo");
          that.siteHeader.addClass("site-header--narrow");
        } else {
          that.siteHeader.removeClass("site-header--dark");
          that.siteHeaderLogo.removeClass("site-header__logo--smaller-logo");
          that.siteHeader.removeClass("site-header--narrow");
        }
      },
      offset: "10%"
    });
  }
}

export default StickyHeader;
