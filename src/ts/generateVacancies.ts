import UKFlag from "/flags/UK.svg";
import SPFlag from "/flags/SP.svg";
import GEFlag from "/flags/GE.svg";
import NRFlag from "/flags/NR.svg";
import USAFlag from "/flags/USA.svg";
import ETFlag from "/flags/ET.svg";
import NTFlag from "/flags/NT.svg";
import CZFlag from "/flags/CZ.svg";
import PLFlag from "/flags/PL.svg";
import HGFlag from "/flags/HG.svg";

const FLAG_MAP = {
  Англия: UKFlag,
  Испания: SPFlag,
  Германия: GEFlag,
  Норвегия: NRFlag,
  США: USAFlag,
  Эстония: ETFlag,
  Нидерланды: NTFlag,
  Чехия: CZFlag,
  Польша: PLFlag,
  Венгрия: HGFlag,
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
                <span class="mobile-salary">${vacancy.salary}</span>
                <div class="vacancy-info-wrapper">
                   
                    <p>Категория: <span>${vacancy.category}</span></p>
                    <p>Занятость: <span>${vacancy.employment}</span></p>
<!--                    <p>Возраст: <span>${vacancy.age}</span></p>-->
                    <p>Пол: <span>${vacancy.gender}</span></p>
                    <p>Язык: <span>${vacancy.languageSkill}</span>
                    </p>
                   
                     <p>
                    Жилье: <span>${vacancy.house}</span>
                    </p>
                    <p class="vacancy-salary">
                    Зарплата: <span>${vacancy.salary}</span>
                    </p>
                </div>
              
              <button class="more-info-vacancy">Подробнее</button>
              <button data-vacancy="${
                vacancy.name
              }" class="request-vacancy" >Оставить заявку</button>`;
    vacanciesListElement.appendChild(listElement);
  });
};
