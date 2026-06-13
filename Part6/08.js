// При поиске подходящего значения важно вернуть именно первое совпадение, а не все подходящие элементы. Найди первое число, которое строго больше `10`; если такого числа нет, верни `undefined`.
// Вход:
const numbers = [2, 5, 11, 3];

// Вызов:
const result = findFirstGreaterThanTen(numbers);

// Ожидаемый результат:
const expected = 11;

// Дополнительный пример:
const secondResult = findFirstGreaterThanTen([1, 2, 3]);
const secondExpected = undefined;

function findFirstGreaterThanTen(numbers) {
  return numbers.find((item) => item > 10);
}
