// Напиши функцию, которая принимает два объекта и возвращает объект только с теми ключами, значения которых различаются (значение берётся из второго объекта).
const before = { name: "Дима", age: 25, city: "Москва", role: "user" };
const after = { name: "Дима", age: 26, city: "Питер", role: "user" };

// Вызов:
const result = objectDiff(before, after);

// Ожидаемый результат:
const expected = { age: 26, city: "Питер" };

function objectDiff(before, after) {
  const result = {};
  for (const key in after) {
    if (after[key] !== before[key]) {
      result[key] = after[key];
    }
  }
  return result;
}
