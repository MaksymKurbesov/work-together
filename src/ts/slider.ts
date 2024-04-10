import Swiper from "swiper";

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    disabledClass: "disabled-class",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    580: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    },
  },
});

const swiperVacancy = new Swiper(".swiper-container-vacancy", {
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: "swiper-pagination",
    clickable: true,
  },
});

const prevButton = document.querySelector(".swiper-button-prev1");
const nextButton = document.querySelector(".swiper-button-next1");
const prev2Button = document.querySelector(".swiper-button-prev2");
const next2Button = document.querySelector(".swiper-button-next2");

console.log(next2Button, "next2Button");

if (prevButton) {
  prevButton.addEventListener("click", (e) => {
    swiper.slidePrev();
  });
}

if (nextButton) {
  nextButton.addEventListener("click", (e) => {
    swiper.slideNext();
  });
}

if (prev2Button) {
  prev2Button.addEventListener("click", (e) => {
    swiperVacancy.slidePrev();
  });
}

if (next2Button) {
  next2Button.addEventListener("click", (e) => {
    swiperVacancy.slideNext();
    console.log("work");
  });
}
