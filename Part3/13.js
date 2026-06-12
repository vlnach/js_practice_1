// Преобразуйте объект с вложенными массивами в “плоский” массив значений
// Вход:
const obj = {
  a: [1, 2],
  b: [3, 4],
  c: [5],
  d: 11,
  e: [6, 7],
};

// Вызов:
const result = flattenValues(obj);

// Ожидаемый результат:
const expected = [1, 2, 3, 4, 5, 6, 7];

function flattenValues(obj) {
  const result = [];

  for (const key in obj) {
    const value = obj[key];
    if (Array.isArray(value)) result.push(...value);
  }
  return result;
}
