import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initFaq = () => {
  tl.add({
    targets: document.querySelector(".faq-title"),
    opacity: [0, 1],
    duration: 500,
  }).add({
    targets: document.querySelectorAll(".faq-list li"),
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(100),
  });
};
