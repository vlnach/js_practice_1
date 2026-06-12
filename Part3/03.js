// Вход:
const obj = {
  name: "Alex",
  age: 25,
};

// Вызов:
const result = upperCaseKeys(obj);

// Ожидаемый результат:
const expected = {
  NAME: "Alex",
  AGE: 25,
};

function upperCaseKeys(obj) {
  const result = {};
  for (const key in obj) {
    result[key.toUpperCase()] = obj[key];
  }
  return result;
}
