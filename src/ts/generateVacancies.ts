import UKFlag from "/flags/UK.svg";
import SPFlag from "/flags/SP.svg";
import GEFlag from "/flags/GE.svg";
import NRFlag from "/flags/NR.svg";
import USAFlag from "/flags/USA.svg";

const FLAG_MAP = {
  Великобритания: UKFlag,
  Испания: SPFlag,
  Германия: GEFlag,
  Норвегия: NRFlag,
  США: USAFlag,
};

export const generateVacancyList = (vacancies) => {
  const vacanciesListElement = document.querySelector(".vacancies-list");

  if (!vacanciesListElement) return;

  vacanciesListElement.innerHTML = "";

  vacancies.forEach((vacancy) => {
    const listElement = document.createElement("li");
    listElement.className = `vacancies-list__item`;
    listElement.innerHTML = `
              <div class="image-wrapper">
                <div class="country">
                  <img src=${FLAG_MAP[vacancy.country]} width="20" />${
      vacancy.country
    }
                </div>
                <img src=${vacancy.image} />
              </div>
              <div class="description-wrapper">
                <h3>${vacancy.name}</h3>
                <div class="vacancy-info-wrapper">
                   
                    <p>Категория: <span>${vacancy.category}</span></p>
                    <p>Занятость: <span>${vacancy.employment}</span></p>
<!--                    <p>Возраст: <span>${vacancy.age}</span></p>-->
                    <p>Пол: <span>${vacancy.gender}</span></p>
                    <p>Язык: <span>${
                      vacancy.languageSkill
                        ? "Со знанием языка"
                        : "Без знания языка"
                    }</span>
                    </p>
                   
                     <p>
                    Жилье: <span>Бесплатно</span>
                    </p>
                    <p class="vacancy-salary">
                    Зарплата: <span>${vacancy.salary}</span>
                    </p>
                </div>
              </div>
              <button>Оставить заявку</button>`;
    vacanciesListElement.appendChild(listElement);
  });
};
