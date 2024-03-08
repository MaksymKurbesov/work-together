import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initWithUs = () => {
  tl.add({
    targets: document.querySelectorAll(".with-us-card"),
    opacity: [0, 1],
    duration: 1500,
  })
    .add(
      {
        targets: document.querySelectorAll(".tags-list li"),
        opacity: [0, 1],
        duration: 500,
        delay: anime.stagger(100),
      },
      "-=1000"
    )
    .add(
      {
        targets: document.querySelectorAll(".with-us-card__header h2"),
        opacity: [0, 1],
        duration: 500,
      },
      "-=500"
    )
    .add(
      {
        targets: document.querySelectorAll(".features-list li"),
        opacity: [0, 1],
        duration: 500,
        delay: anime.stagger(100),
      },
      "-=500"
    )
    .add(
      {
        targets: document.querySelector(".with-us__button"),
        opacity: [0, 1],
        duration: 500,
      },
      "-=500"
    );
};
