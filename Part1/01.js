// **Условие:** Напиши `countEvenOdd(nums)`, которая вернёт объект `{ even, odd }` с количеством чётных и нечётных чисел.

// Вход:
const nums = [1, 2, 3, 4, 5, 6];

// Вызов:
const result = countEvenOdd(nums);

// Ожидаемый результат:
const expected = { even: 3, odd: 3 };

function countEvenOdd(nums) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) even++;
    else odd++;
  }

  return { even, odd };
}
