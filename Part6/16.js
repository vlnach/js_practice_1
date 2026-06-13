// В аналитике бывает нужно отсеять неподходящие значения, преобразовать оставшиеся и получить один итог. Убери все числа меньше `0`, каждое оставшееся число умножь на `2`, затем посчитай сумму.
// Вход:
const numbers = [5, -1, 2, -3, 4];

// Вызов:
const result = getPositiveDoubleSum(numbers);

// Ожидаемый результат:
const expected = 22;

const getPositiveDoubleSum = (numbers) => {
  return numbers
    .filter((item) => item > 0)
    .reduce((total, item) => (total += item * 2), 0);
};
