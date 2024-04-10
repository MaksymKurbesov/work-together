import "../style.scss";
import "../ts/pagination";
import "../ts/filterVacancies";
import "../ts/mobileFilter";
import "../ts/mobileMenu";
import { PopupController } from "../ts/PopupController";
import "../ts/vacanciesHandlers";
import "../ts/sendRequestToTelegram";

const leaveRequestButtons = document.querySelectorAll(".leave-request-button");

const contactUsPopup = new PopupController(
  "popup-contact-us__wrapper",
  "popup__bg"
);

leaveRequestButtons.forEach((button) => {
  button.addEventListener("click", () => {
    contactUsPopup.showPopup();
  });
});
