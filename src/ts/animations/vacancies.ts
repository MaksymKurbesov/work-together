import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initVacancies = () => {
  tl.add({
    targets: document.querySelector(".vacancy h2"),
    opacity: [0, 1],
    duration: 500,
  })
    .add({
      targets: document.querySelector(".vacancy-subtitle"),
      opacity: [0, 0.7],
      duration: 500,
    })
    .add({
      targets: document.querySelectorAll(".vacancy-list li"),
      opacity: [0, 1],
      duration: 500,
      delay: anime.stagger(100),
    })
    .add({
      targets: document.querySelector(".all-vacancy"),
      opacity: [0, 1],
      duration: 500,
    });
};
