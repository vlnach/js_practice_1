// Напиши функцию, которая принимает объект с числовыми значениями и возвращает ключ, у которого наибольшее значение.
// Вход:
const votes = { Аня: 34, Боря: 71, Вася: 55, Галя: 68 };

// Вызов:
const result = maxValueKey(votes);

// Ожидаемый результат:
const expected = "Боря";

function maxValueKey(votes) {
  let maxKey = null;
  let maxValue = -Infinity;

  for (const key in votes) {
    const value = votes[key];
    if (value > maxValue) {
      maxKey = key;
      maxValue = value;
    }
  }
  return maxKey;
}
