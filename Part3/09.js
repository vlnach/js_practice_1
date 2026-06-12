// Подсчитайте количество элементов в каждой категории.
// Вход:
const list = [
  { id: 1, category: "A" },
  { id: 2, category: "B" },
  { id: 3, category: "A" },
  { id: 4, category: "A" },
];

// Вызов:
const result = countByCategory(list);

// Ожидаемый результат:
const expected = {
  A: 3,
  B: 1,
};

function countByCategory(list) {
  const result = {};

  for (const item of list) {
    const category = item.category;
    if (!result[category]) {
      result[category] = 1;
    } else {
      result[category]++;
    }
  }
  return result;
}
