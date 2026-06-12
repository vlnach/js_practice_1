// Напиши функцию, которая возвращает новый объект только с указанными ключами из исходного
// Вход:
const user = { id: 1, name: 'Аня', email: 'a@b.ru', password: 'secret', age: 25 };
const keys = ['name', 'email'];

// Вызов:
const result = pick(user, keys);

// Ожидаемый результат:
const expected = { name: 'Аня', email: 'a@b.ru' };
```