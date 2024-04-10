export class PopupController {
  popup: HTMLElement | null;
  popupBg: HTMLElement | null;
  closeButton: HTMLElement | null;
  closeButtonSpan: HTMLElement[] | null;

  constructor(popupName: string, popupBg) {
    this.popup = document.querySelector(`.${popupName}`);
    this.popupBg = document.querySelector(`.${popupBg}`);
    this.closeButton = document.querySelector(
      `.${popupName} .close-popup-button`
    );
    this.closeButtonSpan = document.querySelector(
      `.${popupName} .close-popup-button span`
    );

    this.init();
  }

  showPopup() {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "17px";

    this.popup?.classList.add("active");
    this.popupBg?.classList.add("active");

    document.addEventListener("keydown", (e) => {
      this.hidePopup(e);
    });
  }

  hidePopup(e) {
    const isCorrectListener =
      e.target === this.popupBg ||
      e.key === "Escape" ||
      e.target === this.closeButton ||
      e.target.tagName === "SPAN";

    if (isCorrectListener) {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0";

      this.popup?.classList.remove("active");
      this.popupBg?.classList.remove("active");
    }
  }

  init() {
    this.closeButton?.addEventListener("click", (e) => {
      this.hidePopup(e);
    });

    this.popupBg?.addEventListener("click", (e) => {
      this.hidePopup(e);
    });
  }
}
