import Swiper from "swiper";

const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    disabledClass: "disabled-class",
  },
});

const prevButton = document.querySelector(".swiper-button-prev1");
const nextButton = document.querySelector(".swiper-button-next1");

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
