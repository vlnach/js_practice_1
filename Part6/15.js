// Для заглушек, рейтингов или начального состояния иногда нужен массив заданной длины с одинаковым значением. Верни массив длины `n`, где каждый элемент равен `value`.
// Вход:
const length = 4;
const value = 0;

// Вызов:
const result = createFilledArray(length, value);

// Ожидаемый результат:
const expected = [0, 0, 0, 0];

function createFilledArray(length, value) {
  return Array(length).fill(value);
}
