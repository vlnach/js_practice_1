// Преобразуй массив объектов пользователей в объект (map), где ключом является `id`, а значением сам объект пользователя.

// Вход:
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];

// Вызов:
const result = transform(users);

// Ожидаемый результат:
const expected = {
  1: { id: 1, name: "A" },
  2: { id: 2, name: "B" },
  3: { id: 3, name: "C" },
};

function transform(users) {
  const result = {};
  {
    for (const key in users) {
      const user = users[key];
      const id = user.id;
      result[id] = user;
    }
  }
  return result;
}
