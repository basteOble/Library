const myLibrary = (() => {
  let library = [];

  const getBook = (findThisBook) => {
    return library.find(book => book._author === findThisBook.author && book._title === findThisBook.title)
  }

  const addBook = (addThisBook) => library.push(addThisBook)

  const removeBook = (removeThisBook) => library.splice(library.indexOf(removeThisBook), 1)

  return { getBook, addBook, removeBook }
})();


class Book {
  constructor(newBookData) {
    this._author = newBookData['author'];
    this._title = newBookData['title'];
    this._pages = newBookData['pages'];
    this._readStat = newBookData['readStat'] || false;
  }

  get author() {
    return this._author;
  }

  get title() {
    return this._title;
  }

  get pages() {
    return this._pages;
  }

  get readStat() {
    return this._readStat;
  }
  set readStat(updateStat) {
    this._readStat = updateStat;
  }
}

const libraryController = (() => {
  const hideForm = () => {
    form.reset();
    bookForm.classList.toggle('popup-form-hide');
  }

  const createBookCard = (bookData) => {
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
  const removeBook = (removeBtn, bookData) => {
    removeBtn.parentElement.remove();
    myLibrary.removeBook(bookData);
  };

  // Change change the 'read status' of book the the read button is clicked
  const bookReadStat = (bookData) => {
    if (bookData.readStat) {
      bookData.readStat = false;
    } else {
      bookData.readStat = true;
    }
  };
  
  const btnReadStat = (readBtn, bookData) => {
    if (bookData.readStat) {
      readBtn.textContent = 'Have Read';
      readBtn.classList.add('have-read');
    } else {
      readBtn.textContent = 'To Read';
      readBtn.classList.remove('have-read');
    }
  };

  const addBookToLibrary = function(e) {
    e.preventDefault();
    
    const dupWarn = document.querySelector('#is-in-library');
    const myFormData = new FormData(this);
    const value = Object.fromEntries(myFormData.entries());
    const newBook = new Book(value);
  
    // Check if user already have this book 
    if (myLibrary.getBook(newBook) !== undefined) {
      dupWarn.style.display = 'block';
    } else {
      dupWarn.style.display = 'none';
      myLibrary.addBook(newBook)
      createBookCard(newBook);
      hideForm();
    }
  };

  return { hideForm,addBookToLibrary }
})();

const form = document.querySelector('form');
const addBook = document.querySelector('#add');
const cancelAdd = document.querySelector('#cancel');
const bookForm = document.querySelector('#book-form');
const shelf = document.querySelector('.books-list')


addBook.onclick = () => libraryController.hideForm();
cancelAdd.onclick = () => bookForm.classList.toggle('popup-form-hide');
form.addEventListener('submit', libraryController.addBookToLibrary);
