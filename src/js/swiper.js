document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelectorAll('.common-swiper')
    .forEach((swiperContainer, index) => {
      const nextEl = swiperContainer.querySelector('.swiper-button-next');
      const prevEl = swiperContainer.querySelector('.swiper-button-prev');

      new Swiper(swiperContainer, {
        loop: true,
        navigation: {
          nextEl,
          prevEl,
        },
      });
    });
});

// const swiper = new Swiper('.swiper', {
//   speed: 400,

//   // Default parameters
//   slidesPerView: 1,
//   spaceBetween: 10,
//   // Responsive breakpoints

//   // when window width is >= 835px
//   835: {
//     slidesPerView: 2,
//     spaceBetween: 16,
//   },
//   // when window width is >= 1440px
//   1440: {
//     slidesPerView: auto,
//     spaceBetween: 40,
//   },
// });

// import Swiper from 'swiper';
// // import 'swiper/css';

// const swiper = new Swiper('.swiper', {
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
