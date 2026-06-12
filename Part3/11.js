// Отфильтруйте объект, оставив только поля, значения которых больше `N`
// Вход:
const obj = {
  a: 5,
  b: 15,
  c: 8,
  d: 20,
};

// Вызов:
const result = filterGreaterThan10(obj, 10);

// Ожидаемый результат:
const expected = {
  b: 15,
  d: 20,
};

function filterGreaterThan10(obj, num) {
  const result = {};
  for (const key in obj) {
    const item = obj[key];

    if (num < item) result[key] = item;
  }
  return result;
}
