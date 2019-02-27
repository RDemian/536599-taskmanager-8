// main.js

import makeFilter from './make-filter.js';
import makeTask from './make-task.js';

/* Создаем фильтры */
const filters = document.querySelector(`.main__filter`);

filters.insertAdjacentHTML(`beforeend`, makeFilter(`All`, 15, true));
filters.insertAdjacentHTML(`beforeend`, makeFilter(`Overdue`, 1));
filters.insertAdjacentHTML(`beforeend`, makeFilter(`Today`, 4));
filters.insertAdjacentHTML(`beforeend`, makeFilter(`Favorites`, 7));
filters.insertAdjacentHTML(`beforeend`, makeFilter(`Repeating`, 2));
filters.insertAdjacentHTML(`beforeend`, makeFilter(`Tags`, 6));
filters.insertAdjacentHTML(`beforeend`, makeFilter(`Archive`, 11));

/* Создаем таски */
const tasksContainer = document.querySelector(`.board__tasks`);

const renderTasks = (count) => {
  let tasks = ``;
  for (let i = 1; i <= count; i += 1) {
    tasks = tasks + ` ` + makeTask();
  }
  return tasks;
};

tasksContainer.insertAdjacentHTML(`beforeend`, renderTasks(7));

/* случайное целое число в диапазоне */
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* Обработчик клика по фильтрам */
const handlerFilterClick = (el) => {
  /* клик срабатывает 2 раза по метке и по чекбоксу, отсекаем второе срабатывание */
  if (!el.target.classList.contains(`filter__label`)) {
    return;
  }

  tasksContainer.innerHTML = renderTasks(getRandomInt(1, 10));
};

filters.addEventListener(`click`, handlerFilterClick);
