// cоздайте новый объект без полей, значения которых равны `null` или `undefine`

// Вход:
const obj = {
  a: 1,
  b: null,
  c: undefined,
  d: 2,
  e: 0,
  f: false,
};

// Вызов:
const result = removeEmpty(obj);

// Ожидаемый результат:
const expected = {
  a: 1,
  d: 2,
  e: 0,
  f: false,
};

function removeEmpty(obj) {
  const result = {};
  for (const key in obj) {
    let item = obj[key];
    if (!(item === undefined || item === null)) {
      result[key] = item;
    }
  }
  return result;
}
