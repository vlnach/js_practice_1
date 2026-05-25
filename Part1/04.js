// **Условие:** Напиши `filterRange(nums, min, max)`, которая вернёт новый массив чисел из диапазона `[min, max]` включительно.

// Вход:
const nums = [5, 1, 9, 3, 7];
const min = 3;
const max = 7;

// Вызов:
const result = filterRange(nums, min, max);

// Ожидаемый результат:
const expected = [5, 3, 7];

function filterRange(nums, min, max) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= min && nums[i] <= max) result.push(nums[i]);
  }
  return result;
}
