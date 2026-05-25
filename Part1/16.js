// **Условие:** Напиши `chunkArray(arr, size)`, которая разобьёт массив на массив подмассивов длины `size` (последний может быть короче).
// Вход:
const arr = [1, 2, 3, 4, 5];
const size = 2;

// Вызов:
const result = chunkArray(arr, size);

// Ожидаемый результат:
const expected = [[1, 2], [3, 4], [5]];

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
