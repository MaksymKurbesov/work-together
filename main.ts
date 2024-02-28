import "./src/style.scss";
import "./src/ts/collapse";
import { PopupController } from "./src/ts/PopupController";

document.addEventListener("readystatechange", () => {
  const popupBg = document.querySelector(".popup__bg");
  const popupWrapper = document.querySelector(".popup-contact-us__wrapper");

  popupBg?.setAttribute("style", "transition: 0.5s all;");
  popupWrapper?.setAttribute("style", "transition: 0.5s all;");
});

const contactUsPopup = new PopupController("popup-contact-us__wrapper");

const leaveRequestButtons = document.querySelectorAll(".leave-request-button");

leaveRequestButtons.forEach((button) => {
  button.addEventListener("click", () => {
    contactUsPopup.showPopup();
  });
});
