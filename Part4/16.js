// Напиши функцию, которая возвращает новый массив с элементами в случайном порядке, не мутируя исходный.
// Вход:
const arr = [1, 2, 3, 4, 5, 6];

// Вызов:
const result = shuffle(arr);

// Ожидаемый результат:
// Порядок случайный, но все элементы сохранены:
const expected = [3, 1, 5, 2, 6, 4]; // пример

function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
