const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: 9.99 },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", price: 10.99 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", author: "J.R.R. Tolkien", price: 14.99 }
];

function formatBookTitlesAndPrices(books) {
    const formattedBooks = books.map(book => `${book.title}: ${book.price}`);
    return formattedBooks;
}

const bookTitlesAndPrices = formatBookTitlesAndPrices(books);

console.log(bookTitlesAndPrices);
