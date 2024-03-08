import anime from "animejs/lib/anime.es.js";
import { initCountAnimation } from "../countAnimation";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initInDigits = () => {
  tl.add({
    targets: document.querySelector(".in-digits"),
    opacity: [0, 1],
    duration: 500,
  })
    .add({
      targets: document.querySelectorAll(".in-digits ul li"),
      opacity: [0, 1],
      duration: 500,
      delay: anime.stagger(100),
      complete: () => {
        initCountAnimation();
      },
    })
    .add({
      targets: document.querySelectorAll(".in-digits-text h3"),
      opacity: [0, 1],
      duration: 500,
    })
    .add({
      targets: document.querySelectorAll(".in-digits-text p"),
      opacity: [0, 0.7],
      duration: 500,
      delay: anime.stagger(100),
    });
};
