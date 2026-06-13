// Иногда достаточно проверить, есть ли в списке конкретное значение. Верни `true`, если в массиве есть число `42`, иначе верни `false`.
// Вход:
const numbers = [1, 42, 3];

// Вызов:
const result = hasNumber42(numbers);

// Ожидаемый результат:
const expected = true;

function hasNumber42(numbers) {
  return numbers.includes(42);
}
