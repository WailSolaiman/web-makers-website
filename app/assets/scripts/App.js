import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import RevealOnLoad from './modules/RevealOnLoad';
import HoverElements from './modules/HoverElements';
import Carousel from './modules/Carousel';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
new RevealOnScroll($(".note-section__subtitle"), "50%");
new RevealOnScroll($(".note-section__title"), "50%");
var revealOnLoad = new RevealOnLoad();
var hoverElements = new HoverElements();
var carousel = new Carousel();
var modal = new Modal();
