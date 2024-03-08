const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;

    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

export const initCountAnimation = () => {
  const totalVacancies = document.querySelector(".total-vacancies span");
  const totalApplicant = document.querySelector(".total-applicant span");
  const findWorkPercentage = document.querySelector(
    ".find-work-percentage span"
  );
  const averageTime = document.querySelector(".average-time span");

  animateValue(totalVacancies, 0, 1450, 2000);
  setTimeout(() => {
    animateValue(totalApplicant, 0, 35200, 2000);
  }, 500);
  setTimeout(() => {
    animateValue(findWorkPercentage, 0, 93, 2000);
  }, 1000);
  setTimeout(() => {
    animateValue(averageTime, 0, 3, 2000);
  }, 1500);
};
