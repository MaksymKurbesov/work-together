import { VACANCIES } from "./VACANCIES";
import { generateVacancyList } from "./generateVacancies";

export interface IVacancy {
  image: string;
  name: string;
  country: string;
  category: string;
  age: string;
  salary: string;
  employment: string;
  gender: string;
  workPlace: string;
  languageSkill: boolean;
  house: boolean;
}

const paginationContainer = $(".pagination");

paginationContainer.pagination({
  dataSource: VACANCIES,
  pageRange: 1,
  showPrevious: false,
  showNext: false,
  activeClassName: "active-page",
  callback: (data) => {
    const html = generateVacancyList(data);
    $(".pagination ul").html(html);
  },
});
