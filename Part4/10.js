// Напиши функцию, которая сдвигает массив циклически на n позиций вправо (при отрицательном n — влево).
// Вход:
const arr = [1, 2, 3, 4, 5];
const n = 2;

// Вызов:
const result = rotate(arr, n);

// Ожидаемый результат:
const expected = [4, 5, 1, 2, 3];

function rotate(arr, n) {
  const result = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const newIndex = (i + n + len) % len;
    result[newIndex] = arr[i];
  }
  return result;
}
