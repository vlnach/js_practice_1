// Напиши функцию, которая проверяет, содержит ли массив указанное значение, и возвращает true или false.
// Вход:
const fruits = ["яблоко", "банан", "вишня", "манго"];
const value = "банан";

// Вызов:
const result = contains(fruits, value);

// Ожидаемый результат:
const expected = true;

function contains(arr, value) {
  for (const item of arr) {
    if (item === value) return true;
  }
  return false;
}
