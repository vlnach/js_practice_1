// Напиши функцию `analyzeBookSales(booksArray)` для расчета следующего показателя:
// - **Общая выручка** за день.
// Входные данные

const books = [
  { title: "1984", category: "dystopia", price: 350 },
  { title: "Brave New World", category: "dystopia", price: 400 },
  { title: "The Great Gatsby", category: "classic", price: 300 },
  { title: "Dune", category: "sci-fi", price: 450 },
  { title: "Fahrenheit 451", category: "dystopia", price: 380 },
  { title: "To Kill a Mockingbird", category: "classic", price: 320 },
  { title: "Foundation", category: "sci-fi", price: 420 },
];

// Выходные данные
// Число с суммой стомости всех проданных книг

function analyzeBookSales(booksArray) {
  let result = 0;
  for (const book of booksArray) {
    result = result + book.price;
  }
  return result;
}

function analyzeBookSales2(booksArray) {
  return booksArray.reduce((sum, book) => sum + book.price, 0);
}
