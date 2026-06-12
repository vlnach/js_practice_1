// - Увеличить ключи на `N%`

//     Создайте новый объект с теми же ключами, но увеличьте все числовые значения на `N%`, не мутируя исходный объект.

// Вход:
const prices = {
  apple: 100,
  banana: 50,
  orange: 80,
  mango: 120,
};

// Вызов:
const result = increasePrices(prices, 20);

// Ожидаемый результат:
const expected = {
  apple: 120,
  banana: 60,
  orange: 96,
  mango: 144,
};

function increasePrices(prices, ammount) {
  const result = {};
  for (const key in prices) {
    let item = prices[key];
    item = item + (item * ammount) / 100;
    result[key] = item;
  }
  return result;
}
