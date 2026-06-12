// **словие:** Напиши `invertObject(obj)`, которая вернёт новый объект, где ключи и значения поменяны местами (значения уникальны и строки/числа).
// Вход:
const obj = { a: "x", b: "y", c: "z" };

// Вызов:
const result = invertObject(obj);

// Ожидаемый результат:
const expected = { x: "a", y: "b", z: "c" };

function invertObject(obj) {
  const result = {};

  for (const key in obj) {
    const value = obj[key];
    result[value] = key;
  }
  return result;
}
