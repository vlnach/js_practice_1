// Напиши функцию, которая возвращает среднее арифметическое массива чисел.
// Вход:
const numbers = [10, 20, 30, 40, 50];

// Вызов:
const result = average(numbers);

// Ожидаемый результат:
const expected = 30;

function average(numbers) {
  let result = 0;
  for (const value of numbers) {
    result += value;
  }
  return result / numbers.length;
}
