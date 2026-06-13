// Из текстового поля может прийти строка со значениями через запятую, пробелами и разным регистром. Верни массив строк: у каждой части убраны пробелы по краям, а буквы приведены к нижнему регистру.
// Вход:
const csv = " A , b , C ";

// Вызов:
const result = normalizeCsv(csv);

// Ожидаемый результат:
const expected = ["a", "b", "c"];

function normalizeCsv(csv) {
  return csv.split(",").map((item) => item.trim().toLowerCase());
}
