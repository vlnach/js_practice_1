// Напиши функцию, которая возвращает новый массив без всех вхождений указанного значения.

// Вход:
const arr = [1, 2, 3, 2, 4, 2];
const value = 2;

// Вызов:
const result = removeAll(arr, value);

// Ожидаемый результат:
const expected = [1, 3, 4];

function removeAll(arr, value) {
  const result = [];
  for (const item of arr) {
    if (item !== value) result.push(item);
  }
  return result;
}
