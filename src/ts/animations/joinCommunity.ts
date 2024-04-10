import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initJoinCommunity = () => {
  tl.add({
    targets: document.querySelector(".users"),
    opacity: [0, 1],
    duration: 500,
  })
    .add({
      targets: document.querySelector(".join-community"),
      opacity: [0, 1],
      duration: 500,
    })
    .add(
      {
        targets: document.querySelector(".join-community h2"),
        opacity: [0, 1],
        duration: 500,
      },
      "-=200"
    )
    .add(
      {
        targets: document.querySelector(".join-community__subtitle"),
        opacity: [0, 1],
        duration: 500,
      },
      "-=200"
    )
    .add(
      {
        targets: document.querySelectorAll(".inputs-wrapper input"),
        opacity: [0, 1],
        duration: 500,
        delay: anime.stagger(100),
      },
      "-=200"
    )
    .add(
      {
        targets: document.querySelector(".inputs-wrapper button"),
        opacity: [0, 1],
        duration: 500,
      },
      "-=200"
    );
};
