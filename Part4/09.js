// Напиши функцию, которая принимает два массива и возвращает массив пар из соответствующих элементов.
// Вход:
const names = ["Аня", "Боря", "Вася"];
const scores = [95, 80, 72];

// Вызов:
const result = zip(names, scores);

// Ожидаемый результат:
const expected = [
  ["Аня", 95],
  ["Боря", 80],
  ["Вася", 72],
];

function zip(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}
