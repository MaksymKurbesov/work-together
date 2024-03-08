import { initCountAnimation } from "./countAnimation";
import { initWorkForYou } from "./animations/workForYou";
import { initWithUs } from "./animations/withUs";
import { initVacancies } from "./animations/vacancies";
import { initHero } from "./animations/hero";
import { initInDigits } from "./animations/inDigits";
import { initFaq } from "./animations/faq";
import { initFeedbacks } from "./animations/feedbacks";
import { initOurPartners } from "./animations/ourPartners";
import { initJoinCommunity } from "./animations/joinCommunity";
import { initFooter } from "./animations/footer";

const observe = (selector, callback, options) => {
  let animIsPlayed = false;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animIsPlayed) {
        callback();
        animIsPlayed = true;
      }
    });
  }, options);

  observer.observe(document.querySelector(selector));
};

observe(".hero", initHero, {
  threshold: 1.0,
  rootMargin: "150px",
});
observe(".work-for-you", initWorkForYou, {
  threshold: 1.0,
  rootMargin: "150px",
});
observe(".with-us-card", initWithUs, {
  threshold: 1.0,
  rootMargin: "300px",
});
observe(".vacancy", initVacancies, {
  threshold: 1.0,
  rootMargin: "600px",
});
observe(".in-digits", initInDigits, {
  threshold: 1.0,
  rootMargin: "150px",
});
observe(".faq", initFaq, {
  threshold: 1.0,
  rootMargin: "150px",
});
observe(".feedbacks", initFeedbacks, {
  threshold: 1.0,
  rootMargin: "150px",
});
observe(".partners", initOurPartners, {
  threshold: 1.0,
  rootMargin: "150px",
});
observe(".join-community", initJoinCommunity, {
  threshold: 1.0,
  rootMargin: "250px",
});
observe("footer", initFooter, {
  threshold: 1.0,
  rootMargin: "250px",
});
