import "../style.scss";
import "../ts/filterVacancies";
import "../ts/mobileFilter";
import "../ts/mobileMenu";
import { PopupController } from "../ts/PopupController";
import "../ts/vacanciesHandlers";
import "../ts/sendRequestToTelegram";

import "../ts/pagination";
import {
  handleListenerOnButtons,
  handleRequestVacancy,
} from "../ts/vacanciesHandlers";
const leaveRequestButtons = document.querySelectorAll(".leave-request-button");

const contactUsPopup = new PopupController(
  "popup-contact-us__wrapper",
  "popup__bg"
);

handleListenerOnButtons();
handleRequestVacancy();

leaveRequestButtons.forEach((button) => {
  button.addEventListener("click", () => {
    contactUsPopup.showPopup();
  });
});
