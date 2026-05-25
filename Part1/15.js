// **Условие:** Напиши `removeAll(arr, value)`, которая вернёт новый массив без всех элементов, равных `value`

// Вход:
const arr = [1, 2, 3, 2, 4, 2];
const value = 2;

// Вызов:
const result = removeAll(arr, value);

// Ожидаемый результат:
const expected = [1, 3, 4];

function removeAll(arr, value) {
  const newArr = [];

  for (const item of arr) {
    if (item !== value) {
      newArr.push(item);
    }
  }

  return newArr;
}

console.log(result);
console.log(JSON.stringify(result) === JSON.stringify(expected));
