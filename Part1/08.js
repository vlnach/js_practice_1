// **Условие:** Напиши `groupBy(items, key)`, которая вернёт объект `{ [keyValue]: item[] }`.

// Вход:
const items = [
  { city: "Moscow", name: "Иван" },
  { city: "SPb", name: "Оля" },
  { city: "Moscow", name: "Анна" },
];
const key = "city";

// Вызов:
const result = groupBy(items, key);

// Ожидаемый результат:
const expected = {
  Moscow: [
    { city: "Moscow", name: "Иван" },
    { city: "Moscow", name: "Анна" },
  ],
  SPb: [{ city: "SPb", name: "Оля" }],
};

function groupBy(items, key) {
  const result = {};
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemKey = item[key];

    if (!result[itemKey]) result[itemKey] = [];
    result[itemKey].push(item);
  }
  return result;
}
