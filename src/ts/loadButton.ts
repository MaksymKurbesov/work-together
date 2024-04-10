export const updateButtonState = (button, state) => {
  if (state === "success") {
    button.innerHTML = "Отправлено";
    button.style.background = "#2BAE66";
    button.style.color = "#FCF6F5";

    setTimeout(() => {
      button.innerHTML = "Отправить";
      button.style.background = "#352ce8";
      button.style.color = "white";
    }, 3000);
    return;
  }

  if (state === "loading") {
    button.innerHTML = "Загрузка...";
    button.style.background = "#FEE715";
    button.style.color = "#101820";
    return;
  }

  if (state === "error") {
    button.innerHTML = "Ошибка";
    button.style.background = "#FF0000";
    button.style.color = "#fff";
    return;
  }
};
