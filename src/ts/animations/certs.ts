import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initCerts = () => {
  tl.add({
    targets: document.querySelector(".certs-title"),
    opacity: [0, 1],
    duration: 500,
  })
    .add({
      targets: document.querySelector(".certs-wrapper"),
      opacity: [0, 1],
      duration: 500,
    })
    .add({
      targets: document.querySelectorAll(".certs-wrapper div"),
      opacity: [0, 1],
      duration: 500,
      delay: anime.stagger(100),
    });
};
