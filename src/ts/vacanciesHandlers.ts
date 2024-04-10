import { PopupController } from "./PopupController";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

const getPopupText = (vacancy) => {
  return `
  <h2>Ваш шаг к карьере ${vacancy} за границей!</h2>
  <p>Поздравляем с выбором профессии <b>${vacancy}</b>! Это первый шаг к значимым изменениям в
    вашей профессиональной жизни.
  </p> 
  <p>Оставьте свои контактные данные ниже, и наш менеджер свяжется с
    вами для детального обсуждения возможностей и следующих шагов.
  </p>
 `;
};

export const handleListenerOnButtons = () => {
  const moreInfoButtons = document.querySelectorAll(".more-info-vacancy");

  moreInfoButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const parentWrapper = this.closest(".description-wrapper");
      const infoWrapper = parentWrapper.querySelector(".vacancy-info-wrapper");
      infoWrapper.classList.toggle("active");
    });
  });
};

// handleListenerOnButtons();

export const handleRequestVacancy = () => {
  const vacancyPopup = new PopupController(
    "vacancy-popup__content",
    "vacancy-popup__bg"
  );
  const leaveRequestButtons = document.querySelectorAll(".request-vacancy");

  leaveRequestButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const vacancyName = button.getAttribute("data-vacancy");
      const sendButton = document.querySelector(".send-vacancy-popup");
      sendButton.setAttribute("data-vacancy", vacancyName);
      const vacancyPopupName = document.querySelector(".vacancy-popup__text");
      vacancyPopupName.innerHTML = getPopupText(
        capitalizeFirstLetter(vacancyName)
      );

      vacancyPopup.showPopup();
    });
  });
};

handleRequestVacancy();
