// Для отображения короткого списка иногда нужно собрать элементы в одну строку. Верни строку, где соседние элементы разделены строкой `" | "`.
// Вход:
const parts = ["a", "b", "c"];

// Вызов:
const result = joinWithSeparator(parts);

// Ожидаемый результат:
const expected = "a | b | c";

function joinWithSeparator(parts) {
  return parts.reduce((total, item) => `${total} | ${item}`);
}
