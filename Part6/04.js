// Для статистики или отображения иногда нужно оставить только значения, которые подходят под условие.
// Верни новый массив только из четных чисел, сохранив их порядок.

// Вход:
const numbers = [1, 2, 3, 4];

// Вызов:
const result = getEvenNumbers(numbers);

// Ожидаемый результат:
const expected = [2, 4];

function getEvenNumbers(numbers) {
  return numbers.filter((item) => item % 2 === 0);
}
