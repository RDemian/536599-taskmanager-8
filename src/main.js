// main.js

import makeFilter from './make-filter.js';
import makeTask from './make-task.js';
import getTask from './get-task.js';

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

/* Массив для тасков */
const taskList = [];

const fillTaskList = (count) => {
  for (let i = 0; i < count; i += 1) {
    taskList.push(makeTask(getTask()));
  }
};
/* Заполняем массив тасков */
fillTaskList(7);

const renderTasks = (count = taskList.length) => {
  tasksContainer.innerHTML = ``;
  for (let el of taskList) {
    if (taskList.indexOf(el) > count) {
      break;
    }
    tasksContainer.insertAdjacentHTML(`beforeend`, el);
  }
};

renderTasks();

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

  renderTasks(getRandomInt(1, 7));
};

filters.addEventListener(`click`, handlerFilterClick);
