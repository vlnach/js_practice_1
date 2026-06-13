// Напиши функцию, которая возвращает новый массив только с уникальными значениями, сохраняя порядок первого появления.
// Вход:
const arr = [1, 2, 3, 2, 4, 1, 5, 3];

// Вызов:
const result = unique(arr);

// Ожидаемый результат:
const expected = [1, 2, 3, 4, 5];

function unique(arr) {
  const result = [];
  for (const value of arr) {
    if (!result.includes(value)) result.push(value);
  }
  return result;
}
