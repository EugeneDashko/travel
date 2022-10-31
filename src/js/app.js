import * as flsFunction from "./modules/functions.js"

flsFunction.isWepb();
// далее подключаем модули, например ниже слайдер подключен
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();

(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

//burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    console.log(burgerItem);
}());