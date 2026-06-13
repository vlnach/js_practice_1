// Напиши функцию, которая создаёт массив чисел от start до end включительно с заданным шагом.

// Вход:
const start = 1;
const end = 10;
const step = 2;

// Вызов:
const result = range(start, end, step);

// Ожидаемый результат:
const expected = [1, 3, 5, 7, 9];

function range(start, end, step) {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}
