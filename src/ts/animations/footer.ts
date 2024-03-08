import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initFooter = () => {
  tl.add({
    targets: document.querySelector(".footer-top"),
    opacity: [0, 1],
    duration: 500,
  }).add({
    targets: document.querySelector(".footer-bottom"),
    opacity: [0, 1],
    duration: 500,
  });
};
