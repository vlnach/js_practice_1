// **Условие:** Напиши `indexPositions(arr)`, которая вернёт объект, где ключ — элемент массива, а значение — массив индексов, на которых он встречается.

// Вход:
const arr = ["a", "b", "a", "c", "b", "a"];

// Вызов:
const result = indexPositions(arr);

// Ожидаемый результат:
const expected = { a: [0, 2, 5], b: [1, 4], c: [3] };

function indexPositions(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (result[item]) {
      result[item].push(i);
    } else {
      result[item] = [];
      result[item].push(i);
    }
  }

  return result;
}
