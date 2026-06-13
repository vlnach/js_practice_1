// Перед рендером списка часто нужно убрать отсутствующие значения, но не потерять полезные falsy-значения.
// Верни новый массив без `null` и `undefined`, оставив `0`, пустую строку и `false`.
// Вход:
const values = [0, null, 1, undefined, "", false];

// Вызов:
const result = removeEmptyValues(values);

// Ожидаемый результат:
const expected = [0, 1, "", false];

function removeEmptyValues(values) {
  return values.filter((item) => item !== null && item !== undefined);
}
