// Напиши функцию, которая возвращает массив элементов, присутствующих в обоих массивах (пересечение множеств).
// Вход:
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];

// Вызов:
const result = intersection(a, b);

// Ожидаемый результат:
const expected = [3, 4, 5];

function intersection(a, b) {
  const result = [];

  for (const item of a) {
    if (b.includes(item)) {
      result.push(item);
    }
  }

  return result;
}
