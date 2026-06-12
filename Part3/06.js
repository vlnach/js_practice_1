// Преобразуйте объект в массив объектов формата `{ key, value }`, чтобы можно было удобно итерироваться по данным.
// Вход:
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// Вызов:
const result = toEntriesArray(obj);

// Ожидаемый результат:
const expected = [
  { key: "a", value: 1 },
  { key: "b", value: 2 },
  { key: "c", value: 3 },
  { key: "d", value: 4 },
];

function toEntriesArray(obj) {
  const result = [];
  for (const key in obj) {
    const value = obj[key];
    result.push({ key, value });
  }
  return result;
}
