import App from "./App";
import Storage from "./Storage";
import UI from "./UI"

function createBookCard(book) {
    const bookList = document.querySelector('main');
    const addCard = document.querySelector('.addCard');

    const bookData = Storage.getBook(book);

    const readStatButton = document.createElement('button');
    UI.readStatus(readStatButton, bookData);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteBook')

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
        <p>"${bookData.getTitle()}"</p>
        <p>By "${bookData.getAuthor()}"</p>
        <p>${bookData.getPages()} pages</p>
    `

    bookCard.append(readStatButton, deleteButton)
    bookList.insertBefore(bookCard, addCard);
    App.changeReadStatus(readStatButton, bookData);
    App.deleteBook(deleteButton, bookData)
}

function loadBooks() {
    const savedBooks = Storage.getAllBooks();
    savedBooks.forEach(book => createBookCard(book))
}

export default {
    createBookCard,
    loadBooks,
}