// Перед отправкой формы можно проверить, есть ли среди полей пустое значение. Верни `true`, если в массиве есть хотя бы одна пустая строка `""`, иначе верни `false`.
// Вход:
const strings = ["a", "", "b"];

// Вызов:
const result = hasEmptyString(strings);

// Ожидаемый результат:
const expected = true;

function hasEmptyString(strings) {
  return strings.some((value) => value === "");
}
