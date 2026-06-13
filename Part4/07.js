// Напиши функцию, которая удаляет из массива все falsy-значения: false, null, 0, "", undefined, NaN.
// Вход:
const arr = [0, "привет", false, 42, "", null, "мир", undefined, NaN, 7];

// Вызов:
const result = compact(arr);

// Ожидаемый результат:
const expected = ["привет", 42, "мир", 7];

function compact(arr) {
  const result = [];
  for (const item of arr) {
    if (item) result.push(item);
  }
  return result;
}
