import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initRoadmap = () => {
  tl.add({
    targets: document.querySelector(".roadmap"),
    opacity: [0, 1],
    duration: 500,
  })
    .add({
      targets: document.querySelector(".roadmap h2"),
      opacity: [0, 1],
      duration: 500,
    })
    .add({
      targets: document.querySelector(".roadmap > p"),
      opacity: [0, 1],
      duration: 500,
    })
    .add({
      targets: document.querySelectorAll(".roadmap-list li"),
      opacity: [0, 1],
      duration: 500,
      delay: anime.stagger(100),
    });
};
