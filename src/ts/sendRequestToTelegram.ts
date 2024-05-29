import axios from "axios";
import { updateButtonState } from "./loadButton";

const sendPopupButton = document.querySelector(".send-popup");
const sendPopupButtonBanner = document.querySelector(".inputs-wrapper button");
const sendPopupVacancy = document.querySelector(".send-vacancy-popup");

const sendRequestFromPopup = async () => {
  const name = document.querySelector(".input-name");
  const phone = document.querySelector(".input-phone");
  const sendButton = document.querySelector(".send-popup");

  if (name.value === "") return;

  updateButtonState(sendButton, "loading");
  await sendRequestToTelegram({ name: name.value, phone: phone.value });
  name.value = "";
  phone.value = "";
  updateButtonState(sendButton, "success");
};

const sendRequestFromVacancy = async (vacancy) => {
  const name = document.querySelector(".vacancy-input-name");
  const phone = document.querySelector(".vacancy-input-phone");
  const sendButton = document.querySelector(".send-vacancy-popup");

  if (name.value === "") return;

  updateButtonState(sendButton, "loading");
  await sendRequestToTelegram({
    name: name.value,
    phone: phone.value,
    vacancy,
  });
  name.value = "";
  phone.value = "";
  updateButtonState(sendButton, "success");
};

const sendRequestFromBanner = async () => {
  const name = document.querySelector(".input-name-banner");
  const phone = document.querySelector(".input-phone-banner");

  if (name.value === "") return;

  await sendRequestToTelegram({ name: name.value, phone: phone.value });

  name.value = "";
  phone.value = "";
};

const sendRequestToTelegram = async (data) => {
  await axios.post(
    `https://api.telegram.org/bot6370065062:AAE-A3gbUr-GkdAQIfaB_AFtqZcVs7OjZt0/sendMessage`,
    {
      chat_id: `-1002118696077`,
      parse_mode: "html",
      text: `Имя: ${data.name}\nТелефон: ${data.phone}\nВакансия: ${data.vacancy}`,
    }
  );
};

if (sendPopupButton) {
  sendPopupButton.addEventListener("click", sendRequestFromPopup);
}

if (sendPopupButtonBanner) {
  sendPopupButtonBanner.addEventListener("click", sendRequestFromBanner);
}

if (sendPopupVacancy) {
  sendPopupVacancy.addEventListener("click", async (e) => {
    if (e.target instanceof HTMLElement) {
      const vacancy = e.target.getAttribute("data-vacancy");
      await sendRequestFromVacancy(vacancy);
    }
  });
}
