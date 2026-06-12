// Напиши функцию, которая принимает объект с параметрами и возвращает строку вида key=value&key2=value2.
// Вход:
const params = { search: "ноутбук", page: 2, sort: "price", order: "asc" };

// Вызов:
const result = objectToQueryString(params);

// Ожидаемый результат:
const expected = "search=ноутбук&page=2&sort=price&order=asc";

function objectToQueryString(params) {
  const result = [];
  for (const key in params) {
    const value = params[key];
    result.push(`${key}=${value}`);
  }
  return result.join("&");
}
