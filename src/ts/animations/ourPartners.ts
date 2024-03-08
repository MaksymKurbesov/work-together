import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initOurPartners = () => {
  tl.add({
    targets: document.querySelectorAll(".partners h2"),
    opacity: [0, 1],
    duration: 500,
  })
    .add({
      targets: document.querySelectorAll(".partners p"),
      opacity: [0, 0.7],
      duration: 500,
    })
    .add({
      targets: document.querySelectorAll(".partners-list li"),
      opacity: [0, 1],
      duration: 500,
      delay: anime.stagger(100),
    });
};
