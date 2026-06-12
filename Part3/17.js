// Напиши функцию, обратную предыдущей: принимает строку query string и возвращает объект с параметрами.
// Вход:
const query = "search=ноутбук&page=2&sort=price&order=asc";

// Вызов:
const result = queryStringToObject(query);

// Ожидаемый результат:
const expected = { search: "ноутбук", page: "2", sort: "price", order: "asc" };

function queryStringToObject(query) {
  const result = {};
  query.split("&");

  for (const pair of pairs) {
    const part = pairs.split("=");

    const key = pair[0];
    const value = pair[1];
  }

  result[key] = value;
  return result;
}
