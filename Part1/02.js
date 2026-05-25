// **Условие:** Напиши `minMax(nums)`, которая вернёт объект `{ min, max }`. Если массив пуст — верни `{ min: null, max: null }`.

// Вход:
const nums = [10, -3, 7, 0];

// Вызов:
const result = minMax(nums);

// Ожидаемый результат:
const expected = { min: -3, max: 10 };

function minMax(nums) {
  if (nums.length > 0) {
    let max = nums[0];
    let min = nums[0];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max) max = nums[i];
      if (nums[i] < min) min = nums[i];
    }
    return { min, max };
  } else {
    return { min: null, max: null };
  }
}
