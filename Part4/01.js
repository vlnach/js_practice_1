// Напиши функцию, которая принимает массив чисел и возвращает их сумму.

/// Вход:
const numbers = [1, 2, 3, 4, 5];

// Вызов:
const result = sum(numbers);

// Ожидаемый результат:
const expected = 15;

function sum(numbers) {
  let total = 0;
  for (const value of numbers) {
    total += value;
  }
  return total;
}
