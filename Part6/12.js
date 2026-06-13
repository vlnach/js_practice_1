// Данные могут прийти группами, а интерфейсу нужен один общий список. Верни новый массив, убрав один уровень вложенности.
// Вход:
const nested = [[1, 2], [3], [4, 5]];

// Вызов:
const result = flattenOneLevel(nested);

// Ожидаемый результат:
const expected = [1, 2, 3, 4, 5];

function flattenOneLevel(nested) {
  return nested.flat();
}
