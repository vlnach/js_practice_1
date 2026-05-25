// **Условие:** Напиши `compactObject(obj)`, которая вернёт **новый** объект без свойств со значениями `null`, `undefined`, `''` (пустая строка). Другие «ложные» значения (0, false) — оставлять.

// Вход:
const obj = { a: 0, b: "", c: null, d: "ok", e: undefined, f: false };

// Вызов:
const result = compactObject(obj);

// Ожидаемый результат:
const expected = { a: 0, d: "ok", f: false };

function compactObject(obj) {
  const newObj = {};
  for (const key in obj) {
    const value = obj[key];

    if (value !== null && value !== undefined && value !== "") {
      newObj[key] = value;
    }
  }
  return newObj;
}
