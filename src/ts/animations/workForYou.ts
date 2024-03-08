import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initWorkForYou = () => {
  tl.add({
    targets: document.querySelector(".work-for-you h2"),
    opacity: [0, 1],
    duration: 500,
  })
    .add({
      targets: document.querySelectorAll(".work-for-you ul li"),
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(100),
    })
    .add(
      {
        targets: document.querySelectorAll(".work-for-you ul li h3"),
        opacity: [0, 1],
        duration: 500,
        delay: anime.stagger(100),
      },
      "-=500"
    )
    .add(
      {
        targets: document.querySelectorAll(".work-for-you ul li p"),
        opacity: [0, 1],
        duration: 500,
        delay: anime.stagger(100),
      },
      "-=500"
    );
};
