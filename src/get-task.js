/* структура данных таск */
const getTask = () => ({
  get title() {
    const titleVariant = [
      `Изучить теорию`,
      `Попрактиковаться на демонстрациях`,
      `Сделать домашку`,
      `Пройти интенсив на соточку`];
    return titleVariant[Math.floor(Math.random() * titleVariant.length)];
  },
  title2: [// если так описать title - случайное значение выбирается только при обновлении страницы?
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
  ]),
  get picture() {
    return `//picsum.photos/100/100?r=${Math.random()}`;
  },
  get color() {
    const colorSet = [`black`, `yellow`, `blue`, `green`, `pink`];
    return colorSet[Math.floor(Math.random() * colorSet.length)];
  },
  repeatingDays: {
    'mo': true,
    'tu': false,
    'we': true,
    'th': false,
    'fr': false,
    'sa': true,
    'su': false,
  },
  isFavorite: false,
  isDone: false,
});

export default getTask;
