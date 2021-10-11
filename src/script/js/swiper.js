import Swiper, { A11y, Navigation, Pagination } from "swiper";

import "swiper/css/bundle";


const swiperCategories = () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 'auto',
    spaceBetween: 35,
    speed: 500,
    freeMode: true,
    modules: [A11y, Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

  return swiper;
};

window.addEventListener("DOMContentLoaded", swiperCategories);
