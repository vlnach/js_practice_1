// **Условие:** Напиши `sumMatchingKeys(obj1, obj2)`, которая сложит значения по совпадающим ключам, остальные ключи просто перенесёт.
// Вход:
const obj1 = { a: 2, b: 3, c: 4 };
const obj2 = { b: 5, c: 1, d: 7 };

// Вызов:
const result = sumMatchingKeys(obj1, obj2);

// Ожидаемый результат:
const expected = { a: 2, b: 8, c: 5, d: 7 };

function sumMatchingKeys(obj1, obj2) {
  const result = { ...obj1 }; // Создаем новый объект с ключами и значениями из obj1

  for (const key in obj2) {
    if (result.hasOwnProperty(key)) {
      result[key] += obj2[key]; // Если ключ существует в obj1, суммируем значения
    } else {
      result[key] = obj2[key]; // Если ключа нет в obj1, добавляем его
    }
  }

  return result;
}
