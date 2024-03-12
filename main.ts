import "./src/style.scss";
import "./src/vacancies/index.scss";
import "./src/ts/collapse";
import { PopupController } from "./src/ts/PopupController";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./src/ts/slider";   
import "./src/ts/intersection";
import "./src/ts/countAnimation";
import "./src/ts/animations/hero";
import "./src/ts/animations/header";
import "./src/ts/animations/workForYou";
import "./src/ts/animations/withUs";

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
