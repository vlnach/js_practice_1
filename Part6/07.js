// Иногда итог считается не сложением, а последовательным умножением значений. Верни произведение всех чисел в массиве; для пустого массива верни `1`.
// Вход:
const numbers = [2, 3, 4];

// Вызов:
const result = getNumbersProduct(numbers);

// Ожидаемый результат:
const expected = 24;

function getNumbersProduct(numbers) {
  return numbers.reduce((total, item) => total * item, 1);
}
