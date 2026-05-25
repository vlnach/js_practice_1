// **Условие:** Напиши `intersection(arr1, arr2)`, которая вернёт массив элементов, встречающихся в обоих массивах, без дублей.

// Вход:
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 4, 5, 6];

// Вызов:
const result = intersection(arr1, arr2);

// Ожидаемый результат:
const expected = [3, 4];

function intersection(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    if (arr2.includes(value) && !result.includes(value)) result.push(value);
  }
  return result;
}
