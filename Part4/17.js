// Напиши функцию, которая группирует подряд идущие одинаковые элементы массива в подмассивы.
// Вход:
const arr = [1, 1, 2, 3, 3, 3, 4, 4, 1, 1];

// Вызов:
const result = groupConsecutive(arr);

// Ожидаемый результат:
const expected = [[1, 1], [2], [3, 3, 3], [4, 4], [1, 1]];

function groupConsecutive(arr) {
  const result = [];
  let currentGroup = [];

  for (let i = 0; i < arr.length; i++) {
    if (currentGroup.length === 0 || arr[i] === currentGroup[0]) {
      currentGroup.push(arr[i]);
    } else {
      result.push(currentGroup);
      currentGroup = [arr[i]];
    }
  }

  if (currentGroup.length > 0) {
    result.push(currentGroup);
  }

  return result;
}
