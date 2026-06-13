// Для валидации набора значений нужно убедиться, что каждое значение проходит проверку. Верни `true`, если все числа в массиве строго больше `0`; для пустого массива верни `true`.
// Вход:
const numbers = [1, 2, 3];

// Вызов:
const result = areAllNumbersPositive(numbers);

// Ожидаемый результат:
const expected = true;

function areAllNumbersPositive(numbers) {
  return numbers.every((item) => item > 0);
}
