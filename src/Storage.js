import Book from "./Book";

function saveBook(book) {
    const savedBooks = getAllBooks();
    const newBook = new Book(book);
    savedBooks.push(newBook);
    localStorage.setItem('books', JSON.stringify(savedBooks))
}

function getAllBooks() {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    return storedBooks ? storedBooks.map(book => new Book(book)) : []
}

function getBook(newBook) {
    const storedBooks = getAllBooks();
    return storedBooks.find(book => book.getTitle() === newBook.title && book.getAuthor() === newBook.author)
}

function updateBooks(books) {
    localStorage.setItem('books', JSON.stringify(books))
}

export default {
    saveBook,
    getAllBooks,
    getBook,
    updateBooks
}