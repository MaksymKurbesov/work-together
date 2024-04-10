import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "easeOutQuad",
});

export const initWhyPeople = () => {
  tl.add({
    targets: document.querySelector(".why-people_title"),
    opacity: [0, 1],
    duration: 500,
  }).add({
    targets: document.querySelectorAll(".why-people_list li"),
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(100),
  });
};
