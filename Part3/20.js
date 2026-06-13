// Сгруппируйте массив объектов по значению поля `category`, сформировав объект, где ключ — категория, а значение — массив элементов этой категории.
// Вход:
const list = [
  { id: 1, category: "A", name: "Item 1" },
  { id: 2, category: "B", name: "Item 2" },
  { id: 3, category: "A", name: "Item 3" },
  { id: 4, category: "C", name: "Item 4" },
  { id: 2, category: "B", name: "Item 5" },
];

// Вызов:
const result = groupByCategory(list);

// Ожидаемый результат:
const expected = {
  A: [
    { id: 1, category: "A", name: "Item 1" },
    { id: 3, category: "A", name: "Item 3" },
  ],
  B: [
    { id: 2, category: "B", name: "Item 2" },
    { id: 2, category: "B", name: "Item 5" },
  ],
  C: [{ id: 4, category: "C", name: "Item 4" }],
};

function groupByCategory(list) {
  const result = {};
  for (const item of list) {
    const category = item.category;
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(item);
  }
  return result;
}
