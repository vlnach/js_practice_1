// **Условие:** Напиши `sumByKey(items, key)`, которая просуммирует числовые значения по `key`. Отсутствующие/нечисловые — игнорировать.

// Вход:
const items = [{ price: 100 }, { cost: 50 }, { price: 70 }, { price: "NaN" }];
const key = "price";

// Вызов:
const result = sumByKey(items, key);

// Ожидаемый результат:
const expected = 170;

function sumByKey(items, key) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const value = item[key];

    if (typeof value === "number") sum += value;
  }

  return sum;
}
