// Напиши функцию `analyzeBookSales(booksArray)` для расчета следующего показателя:

// - **Количество проданных книг** по каждой категории.

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
//  Массив с каждой категорией и количеством продаж

// [{category: "dystopia", count: 3}, ...]

function analyzeBookSales(booksArray) {
  const counter = {};
  booksArray.reduce((sum, book) => (sum = sum + book.category));

  return booksArray;
}
