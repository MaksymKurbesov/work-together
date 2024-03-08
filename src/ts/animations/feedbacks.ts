import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initFeedbacks = () => {
  tl.add({
    targets: document.querySelector(".feedbacks-title"),
    opacity: [0, 1],
    duration: 500,
  })
    .add({
      targets: document.querySelector(".feedbacks-subtitle"),
      opacity: [0, 0.7],
      duration: 500,
    })
    .add({
      targets: document.querySelector(".slider-buttons"),
      opacity: [0, 1],
      duration: 500,
    })
    .add({
      targets: document.querySelectorAll(".swiper-slide"),
      opacity: [0, 1],
      duration: 500,
      delay: anime.stagger(100),
    });
};
