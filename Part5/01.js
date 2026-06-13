// Напиши функцию, которая принимает массив объектов и имя поля, и возвращает массив значений этого поля.
// Вход:
const students = [
  { name: "Аня", grade: 5 },
  { name: "Боря", grade: 4 },
  { name: "Вася", grade: 3 },
  { name: "Галя", grade: 5 },
];
const field = "name";

// Вызов:
const result = pluck(students, field);

// Ожидаемый результат:
const expected = ["Аня", "Боря", "Вася", "Галя"];

function pluck(arr, field) {
  const result = [];

  for (const obj of arr) {
    result.push(obj[field]);
  }

  return result;
}
