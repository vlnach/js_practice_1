// Напиши функцию, которая принимает объект и карту переименований, и возвращает новый объект с переименованными ключами.
// Вход:
const apiResponse = { usr_name: "Катя", usr_age: 30, usr_city: "Казань" };
const keyMap = { usr_name: "name", usr_age: "age", usr_city: "city" };

// Вызов:
const result = renameKeys(apiResponse, keyMap);

// Ожидаемый результат:
const expected = { name: "Катя", age: 30, city: "Казань" };

function renameKeys(apiResponse, keyMap) {
  const result = {};
  for (const key in apiResponse) {
    const newKey = keyMap[key] || key;
    result[newKey] = apiResponse[key];
  }
  return result;
}
