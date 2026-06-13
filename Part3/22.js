// Реализуйте функцию, которая преобразует вложенный объект в “плоский” объект с ключами в формате пути (`dot notation`).
//  Вход:
const obj = {
  user: {
    profile: {
      name: "Alex",
      contacts: {
        email: "alex@mail.com",
      },
    },
  },
  settings: {
    theme: "dark",
  },
};

// Вызов:
const result = flatten(obj);

// Ожидаемый результат:
const expected = {
  "user.profile.name": "Alex",
  "user.profile.contacts.email": "alex@mail.com",
  "settings.theme": "dark",
};

function flatten(obj) {
  const result = {};
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const flatObject = flatten(obj[key]);
      for (const subKey in flatObject) {
        result[`${key}.${subKey}`] = flatObject[subKey];
      }
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
