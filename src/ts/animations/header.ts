import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

tl.add({
  targets: document.querySelector(".header"),
  opacity: [0, 1],
  duration: 300,
})
  .add({
    targets: document.querySelectorAll(".header__logo"),
    opacity: [0, 1],
    duration: 200,
  })
  .add({
    targets: document.querySelectorAll(".header ul li"),
    opacity: [0, 1],
    duration: 200,
    delay: anime.stagger(100),
  })
  .add({
    targets: document.querySelectorAll(".header .leave-request-button"),
    opacity: [0, 1],
    duration: 500,
  });
