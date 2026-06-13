// Напиши функцию, которая возвращает количество раз, сколько указанное значение встречается в массиве.

// Вход:
const arr = ["кот", "пёс", "кот", "птица", "кот", "пёс"];
const value = "кот";

// Вызов:
const result = countOccurrences(arr, value);

// Ожидаемый результат:
const expected = 3;

function countOccurrences(arr, value) {
  let result = 0;
  for (const item of arr) {
    if (item === value) result++;
  }
  return result;
}
