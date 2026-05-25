// **Условие:** Напиши `sumMatchingKeys(obj1, obj2)`, которая сложит значения по совпадающим ключам, остальные ключи просто перенесёт.

// Вход:
const obj1 = { a: 2, b: 3, c: 4 };
const obj2 = { b: 5, c: 1, d: 7 };

// Вызов:
const result = sumMatchingKeys(obj1, obj2);

// Ожидаемый результат:
const expected = { a: 2, b: 8, c: 5, d: 7 };

function sumMatchingKeys(obj1, obj2) {
  const result = {};
  for (const key in obj1) {
    result[key] = obj1[key];
  }
  for (const key in obj2) {
    if (key in result) result[key] += obj2[key];
    else {
      result[key] = obj2[key];
    }
  }
  return result;
}
