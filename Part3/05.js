// Напиши функцию, которая добавляет в объект только те свойства из defaults, которых в нём ещё нет (не перезаписывает существующие).
// Вход:
const settings = { theme: "dark", fontSize: 18 };
const defaultSettings = {
  theme: "light",
  fontSize: 14,
  lang: "ru",
  animations: true,
};

// Вызов:
const result = defaults(settings, defaultSettings);

// Ожидаемый результат:
const expected = { theme: "dark", fontSize: 18, lang: "ru", animations: true };

function defaults(settings, defaultSettings) {
  const result = {};
  for (const key in settings) {
    const item = settings[key];
    result[key] = item;
  }

  for (const key in defaultSettings) {
    if (!(key in result)) {
      result[key] = defaultSettings[key];
    }
  }
  return result;
}
