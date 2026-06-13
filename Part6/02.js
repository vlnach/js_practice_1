// Перед показом тегов или коротких подписей иногда нужно привести все значения к единому виду. Верни новый массив строк, где каждая строка записана в верхнем регистре.
// Вход:
const words = ["a", "Bc"];

// Вызов:
const result = getUppercaseWords(words);

// Ожидаемый результат:
const expected = ["A", "BC"];

function getUppercaseWords(words) {
  return words.map((value) => value.toUpperCase());
}
