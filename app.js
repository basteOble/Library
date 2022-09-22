const form = document.querySelector('form');

// Add book UI
const addBook = document.querySelector('#add');
const cancelAdd = document.querySelector('#cancel');
const bookForm = document.querySelector('#book-form');

function hideForm() {
  form.reset();
  bookForm.classList.toggle('popup-form-hide');
}

addBook.onclick = () => hideForm();
cancelAdd.onclick = () => bookForm.classList.toggle('popup-form-hide');

// Store books
let myLibrary = [];

function addBookToLibrary(e) {
  e.preventDefault();
  const myFormData = new FormData(this);
  const value = Object.fromEntries(myFormData.entries());
  myLibrary.push(value);
  createBookCard(value);
  hideForm();
};

form.addEventListener('submit', addBookToLibrary);

// Display book
const shelf = document.querySelector('.books-list')

function createBookCard(bookData) {
  const book = document.createElement('li');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  title.textContent = `" ${bookData.title} "`;
  author.textContent = `By ${bookData.author}`;
  pages.textContent = `${bookData.pages} Pages`;
  removeBtn.textContent = 'Remove';

  readBtn.onclick = () => {
    bookReadStat(bookData);
    btnReadStat(readBtn, bookData);
  }
  removeBtn.onclick = () => removeBook(removeBtn, bookData);

  book.append(title);
  book.append(author);
  book.append(pages);
  book.append(readBtn);
  book.append(removeBtn);
  shelf.prepend(book);

  btnReadStat(readBtn, bookData);
};

// Remove book from myLibrary and DOM
function removeBook(removeBtn, bookData) {
  removeBtn.parentElement.remove();
  myLibrary.splice(myLibrary.indexOf(bookData), 1)
}

// Change read status of book
function bookReadStat(bookData) {
  if (bookData.readStat) {
    delete myLibrary[myLibrary.indexOf(bookData)].readStat;
  } else {
    myLibrary[myLibrary.indexOf(bookData)].readStat = 'ON';
  }
}

function btnReadStat(readBtn, bookData) {
  if (bookData.readStat) {
    readBtn.textContent = 'Have Read';
    readBtn.classList.add('have-read');
  } else {
    readBtn.textContent = 'To Read';
    readBtn.classList.remove('have-read');
  }
};
