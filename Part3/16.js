// Напиши функцию, которая возвращает копию объекта без указанных ключей.
// Вход:
const user = { id: 1, name: "Боря", email: "b@b.ru", password: "qwerty" };
const keys = ["password", "id"];

// Вызов:
const result = omit(user, keys);

// Ожидаемый результат:
const expected = { name: "Боря", email: "b@b.ru" };

function omit(user, keys) {
  const result = {};
  for (const key in user) {
    const value = user[key];
    if (!keys.includes[key]) {
      result[key] = value;
    }
  }

  return result;
}
