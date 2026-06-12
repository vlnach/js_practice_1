// Напиши функцию, которая возвращает новый объект с теми же ключами, но значениями, преобразованными через переданную функцию.
// Вход:
const prices = { apple: 100, banana: 50, cherry: 200 };
const transform = (price) => price * 0.9;

// Вызов:
const result = mapValues(prices, transform);

// Ожидаемый результат:
const expected = { apple: 90, banana: 45, cherry: 180 };

function mapValues(prices, transform) {
  const result = {};
  for (const key in prices) {
    const item = prices[key];
    result[key] = transform(item);
  }
  return result;
}
