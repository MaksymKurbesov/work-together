import { VACANCIES } from "./VACANCIES";
import { generateVacancyList } from "./generateVacancies";
import { handleListenerOnButtons } from "./vacanciesHandlers";
import $ from "jquery";

export let FILTER_STATE = {
  country: [],
  category: [],
  employment: [],
  gender: [],
  workPlace: [],
  languageSkill: [],
  house: false,
};

const filters = document.querySelectorAll(".filters-wrapper input");

export const filterVacancies = (vacancies, filters) => {
  return vacancies.filter((vacancy) => {
    const countryMatch =
      filters.country.length === 0 || filters.country.includes(vacancy.country);
    const categoryMatch =
      filters.category.length === 0 ||
      filters.category.includes(vacancy.category);
    const employmentMatch =
      filters.employment.length === 0 ||
      filters.employment.includes(vacancy.employment);
    const genderMatch =
      filters.gender.length === 0 || filters.gender.includes(vacancy.gender);
    const languageMatch =
      filters.languageSkill.length === 0 ||
      filters.languageSkill.includes(vacancy.languageSkill);

    // Соответствие всем фильтрам
    return (
      countryMatch &&
      categoryMatch &&
      employmentMatch &&
      genderMatch &&
      languageMatch
    );
  });
};

const checkInclude = (filter, value) => {
  return FILTER_STATE[filter].includes(value);
};

filters.forEach((filter) =>
  filter.addEventListener(`click`, (event) => {
    const { value, dataset } = event.target;
    const filterType = dataset.filterType;

    const isCountryInclude = checkInclude("country", value);
    const isCategoryInclude = checkInclude("category", value);
    const isEmploymentInclude = checkInclude("employment", value);
    const isGenderInclude = checkInclude("gender", value);
    const isLanguageInclude = checkInclude("languageSkill", value);

    if (
      isCountryInclude ||
      isCategoryInclude ||
      isEmploymentInclude ||
      isGenderInclude ||
      isLanguageInclude
    ) {
      const itemIndex = FILTER_STATE[filterType].indexOf(value);

      if (itemIndex > -1) {
        FILTER_STATE[filterType].splice(itemIndex, 1);
      }
    } else {
      FILTER_STATE[filterType].push(value);
    }

    const filteredVacancies = filterVacancies(VACANCIES, FILTER_STATE);
    const paginationContainer = $(".pagination");

    paginationContainer.pagination({
      dataSource: filteredVacancies,
      pageRange: 1,
      showPrevious: false,
      showNext: false,
      activeClassName: "active-page",
      callback: (data) => {
        const html = generateVacancyList(data);
        $(".pagination ul").html(html);
        handleListenerOnButtons();
      },
    });
  })
);
