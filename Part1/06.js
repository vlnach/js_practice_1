// **Условие:** Напиши `manualReverse(arr)`, которая вернёт **новый** массив в обратном порядке, используя циклы/итерации

// Вход:
const arr = [1, 2, 3, 4];

// Вызов:
const result = manualReverse(arr);

// Ожидаемый результат:
const expected = [4, 3, 2, 1];

function manualReverse(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
