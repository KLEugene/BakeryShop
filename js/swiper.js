var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".carusel-button.next",
    prevEl: ".carusel-button.prev",
  },
  pagination: {
    el: ".swiper-pagination",
    bulletClass: ".pagination__button",
    bulletActiveClass: ".pagination__button--active",
    clickable: true,
  },
});

swiper.init();
