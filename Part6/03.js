// API часто возвращает объекты с лишними полями, а компоненту нужен только список имен. Верни новый массив строк, взяв значение `name` из каждого объекта в исходном порядке.
// Вход:
const users = [
  { id: 1, name: "x" },
  { id: 2, name: "y" },
];

// Вызов:
const result = getUserNames(users);

// Ожидаемый результат:
const expected = ["x", "y"];

function getUserNames(users) {
  return users.map((user) => user.name);
}
s;
