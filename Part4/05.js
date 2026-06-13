// Напиши функцию, которая разбивает массив на подмассивы указанного размера.
// Вход:
const arr = [1, 2, 3, 4, 5, 6, 7];
const size = 3;

// Вызов:
const result = chunk(arr, size);

// Ожидаемый результат:
const expected = [[1, 2, 3], [4, 5, 6], [7]];

function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    const part = arr.slice(i, i + size);
    result.push(part);
  }
  return result;
}
