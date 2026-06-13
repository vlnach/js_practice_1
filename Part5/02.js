// Напиши функцию, которая объединяет два массива объектов по совпадению поля id, дополняя данные из второго массива.
// Вход:
const users = [
  { id: 1, name: "Аня" },
  { id: 2, name: "Боря" },
  { id: 3, name: "Вася" },
];
const details = [
  { id: 1, city: "Москва", age: 25 },
  { id: 2, city: "Питер", age: 30 },
  { id: 3, city: "Казань", age: 22 },
];

// Вызов:
const result = mergeArraysById(users, details);

// Ожидаемый результат:
const expected = [
  { id: 1, name: "Аня", city: "Москва", age: 25 },
  { id: 2, name: "Боря", city: "Питер", age: 30 },
  { id: 3, name: "Вася", city: "Казань", age: 22 },
];

function mergeArraysById(users, details) {
  const result = [];
  for (const user of users) {
    for (const detail of details) {
      if (user.id === detail.id) {
        result.push({ ...user, ...detail });
      }
    }
  }
  return result;
}
