const menuWrapper = document.querySelector(".mobile-menu-wrapper");
const menu = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-menu-button");

const openMenu = () => {
  menuWrapper.classList.add("active");
  menu.classList.add("active");
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  menuWrapper.classList.remove("active");
  menu.classList.remove("active");
  document.body.style.overflow = "auto";
};

hamburger.addEventListener("click", () => {
  openMenu();
});

closeButton.addEventListener("click", () => {
  closeMenu();
});
