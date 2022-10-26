import * as flsFunction from "./modules/functions.js"

flsFunction.isWepb();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper()


(function() {
    const header = document.querySelector('header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active')
        }
    };
}());