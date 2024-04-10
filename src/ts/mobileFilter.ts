const filtersWrapperBg = document.querySelector(".filter-wrapper-background");
const filterButton = document.querySelector(".settings-button");

export const openMobileFilter = () => {
  const filtersWrapper = document.querySelector(".filters-wrapper");
  filtersWrapper.classList.add("active");
  filtersWrapperBg.classList.add("active");

  document.body.style.overflow = "hidden";
};

export const closeMobileFilter = () => {
  const filtersWrapper = document.querySelector(".filters-wrapper");
  filtersWrapper.classList.remove("active");
  filtersWrapperBg.classList.remove("active");

  document.body.style.overflow = "visible";
};

filtersWrapperBg.addEventListener("click", () => {
  closeMobileFilter();
});

filterButton.addEventListener("click", () => {
  openMobileFilter();
});
