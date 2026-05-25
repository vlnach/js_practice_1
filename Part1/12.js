// **Условие:** Напиши `letterFrequency(strings)`, которая вернёт объект частот для всех букв (регистр игнорировать).

// Вход:
const strings = ["Hello", "World"];

// Вызов:
const result = letterFrequency(strings);

// Ожидаемый результат:
const expected = { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 };

function letterFrequency(strings) {
  const result = {};

  for (const word of strings) {
    const lowerWord = word.toLowerCase();

    for (const letter of lowerWord) {
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
}
