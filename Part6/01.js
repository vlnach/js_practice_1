// В интерфейсах и отчетах часто нужно получить новый список значений на основе исходного списка, не меняя входные данные. Верни новый массив той же длины, где каждое число умножено на `2`.
// Вход:
const numbers = [1, 2, 3];

// Вызов:
const result = doubleNumbers(numbers);

// Ожидаемый результат:
const expected = [2, 4, 6];

function doubleNumbers(numbers) {
  return numbers.map((value) => value * 2);
}
