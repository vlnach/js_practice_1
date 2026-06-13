// В отчетах часто нужно получить общий итог по списку значений. Посчитай сумму всех чисел в массиве; для пустого массива верни `0`.
// Вход:
const numbers = [1, 2, 3];

// Вызов:
const result = getNumbersSum(numbers);

// Ожидаемый результат:
const expected = 6;

// Дополнительный пример:
const emptyResult = getNumbersSum([]);
const emptyExpected = 0;

function getNumbersSum(numbers) {
  return numbers.reduce((sum, item) => sum + item, 0);
}
