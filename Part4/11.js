// Напиши функции findMax и findMin, которые находят максимальный и минимальный элемент массива без использования Math.max / Math.min.

// Вход:
const numbers = [3, 7, 1, 9, 4, 6, 2];

// Вызов:
const max = findMax(numbers);
const min = findMin(numbers);

// Ожидаемый результат:
const expectedMax = 9;
const expectedMin = 1;

function findMax(arr) {
  let max = arr[0];
  for (const num of arr) {
    if (num > max) max = num;
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (const num of arr) {
    if (num < min) min = num;
  }
  return min;
}
