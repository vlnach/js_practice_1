// Напиши функцию, которая возвращает элементы первого массива, отсутствующие во втором (разность множеств).
// Вход:
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];

// Вызов:
const result = difference(a, b);

// Ожидаемый результат:
const expected = [1, 2];

function difference(a, b) {
  const result = [];

  for (const item of a) {
    if (!b.includes(item)) {
      result.push(item);
    }
  }

  return result;
}
