// Напиши функцию, которая «разворачивает» массив массивов в плоский массив на один уровень вложенности.
// Вход:
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Вызов:
const result = flatten(arr);

// Ожидаемый результат:
const expected = [1, 2, 3, 4, 5, 6];

function flatten(arr) {
  const result = [];
  for (const newArr of arr) {
    result.push(...newArr);
  }
  return result;
}
