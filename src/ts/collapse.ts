const faqListButtons = document.querySelectorAll(".faq-list li");
const faqAnswers = document.querySelectorAll(".collapse");
const arrows = document.querySelectorAll(".faq-list li img");

const COLLAPSE_STATUS = Array.from(faqAnswers, (x) => !Boolean(x));

faqListButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (!COLLAPSE_STATUS[index]) {
      faqAnswers[index].classList.add("show");
      arrows[index].classList.add("show");
    } else {
      faqAnswers[index].classList.remove("show");
      arrows[index].classList.remove("show");
    }

    COLLAPSE_STATUS[index] = !COLLAPSE_STATUS[index];
  });
});
