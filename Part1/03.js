// **Условие:** Напиши `wordFreq(words)`, которая вернёт объект частот: `{ слово: количество }`. Регистр учитывается.

// Вход:
const words = ["кот", "пёс", "кот", "кот", "пёс"];

// Вызов:
const result = wordFreq(words);

// Ожидаемый результат:
const expected = { кот: 3, пёс: 2 };

function wordFreq(words) {
  const result = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  return result;
}
