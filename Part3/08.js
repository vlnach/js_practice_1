//Напиши функцию, которая принимает массив пар [ключ, значение] и возвращает объект.
// Вход:
const pairs = [
  ["name", "Оля"],
  ["age", 24],
  ["city", "Самара"],
];

// Вызов:
const result = pairsToObject(pairs);

// Ожидаемый результат:
const expected = { name: "Оля", age: 24, city: "Самара" };

function pairsToObject(pairs) {
  const result = {};
  for (const pair of pairs) {
    const key = pair[0];
    const value = pair[1];
    result[key] = value;
  }
  return result;
}
