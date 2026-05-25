// **Условие:** Напиши `findByCriteria(items, criteria)`, где `criteria` — объект вида `{ key: value }`. Верни **первый** объект, который удовлетворяет всем парам ключ-значение (строгое равенство). Если не найден — `null`.

// Вход:
const items = [
  { name: "A", type: "tool", active: true },
  { name: "B", type: "tool", active: false },
  { name: "C", type: "part", active: true },
];
const criteria = { type: "tool", active: true };

// Вызов:
const result = findByCriteria(items, criteria);

// Ожидаемый результат:
const expected = { name: "A", type: "tool", active: true };

function findByCriteria(items, criteria) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    let isMatch = true;

    for (const key in criteria) {
      if (item[key] !== criteria[key]) isMatch = false;
    }

    if (isMatch) return item;
  }
  return null;
}
