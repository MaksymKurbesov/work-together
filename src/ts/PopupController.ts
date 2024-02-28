export class PopupController {
  popup: HTMLElement | null;
  popupBg: HTMLElement | null;
  closeButton: HTMLElement | null;

  constructor(popupName: string) {
    this.popup = document.querySelector(`.${popupName}`);
    this.popupBg = document.querySelector(`.popup__bg`);
    this.closeButton = document.querySelector(
      `.${popupName} .close-popup-button`
    );

    this.init();
  }

  showPopup() {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "17px";

    this.popup?.classList.add("active");
    this.popupBg?.classList.add("active");

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.hidePopup();
      }
    });
  }

  hidePopup() {
    document.body.style.overflow = "visible";
    document.body.style.paddingRight = "0";

    this.popup?.classList.remove("active");
    this.popupBg?.classList.remove("active");
  }

  init() {
    this.closeButton?.addEventListener("click", () => {
      this.hidePopup();
    });

    this.popupBg?.addEventListener("click", () => {
      this.hidePopup();
    });
  }
}
