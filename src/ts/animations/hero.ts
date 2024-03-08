import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initHero = () => {
  tl.add({
    targets: document.querySelector(".hero__title h1"),
    opacity: [0, 1],
    translateX: [-100, 0],
    duration: 300,
  })
    .add({
      targets: document.querySelector(".hero__title p"),
      opacity: [0, 1],
      translateX: [-100, 0],
      duration: 300,
    })
    .add({
      targets: document.querySelector(".hero__title a"),
      opacity: [0, 1],
      translateX: [-100, 0],
      duration: 300,
    })
    .add(
      {
        targets: document.querySelector(".hero__image-wrapper img"),
        opacity: [0, 1],
        duration: 300,
      },
      "-=500"
    )
    .add({
      targets: document.querySelector(".hero__image-wrapper p"),
      opacity: [0, 1],
      duration: 300,
    })
    .add({
      targets: document.querySelector(".hero__image-wrapper button"),
      opacity: [0, 1],
      duration: 300,
    })
    .add({
      targets: document.querySelector(".hero__statistic"),
      opacity: [0, 1],
      duration: 300,
    })
    .add({
      targets: document.querySelectorAll(".hero__statistic li"),
      opacity: [0, 1],
      duration: 300,
      delay: anime.stagger(100),
    });
};
