/* структура данных таск */
const getTask = () => ({
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`][Math.floor(Math.random() * 3)],

  dueDate: new Date(Date.now() + 1 + [-1, 1][Math.floor(Math.random() * 2)] * Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000),

  tags: [
    `homework`,
    `theory`,
    `practice`,
    `test`,
    `selfproject`,
  ].filter(() => [true, false][Math.floor(Math.random() * 2)]).slice(0, 3),

  picture: `//picsum.photos/100/100?r=${Math.random()}`,

  color: [`black`, `yellow`, `blue`, `green`, `pink`][Math.floor(Math.random() * 5)],

  repeatingDays: [{'mo': true, 'tu': false, 'we': true, 'th': false, 'fr': false, 'sa': true, 'su': false}, {'mo': false, 'tu': false, 'we': false, 'th': false, 'fr': false, 'sa': false, 'su': false}][Math.floor(Math.random() * 2)],

  isFavorite: [true, false][Math.floor(Math.random() * 2)],

  isDone: [true, false][Math.floor(Math.random() * 2)],
});

export default getTask;
