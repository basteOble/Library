import UI from './UI'
import Storage from './Storage';
import Dom from './Dom';

function addBook() {
  const form = document.querySelector('.bookForm')

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const bookData = Object.fromEntries(new FormData(this));

    if (Object.values(bookData).some(value => value.trim() === '')) {
      UI.inputIsValid();
      return
    } else if (Storage.getBook(bookData)) {
      alert('you already have that book!')
      this.reset()
      return
    }
    
    Storage.saveBook(bookData);
    Dom.createBookCard(bookData)
    UI.showHideForm();
  })
  UI.displayAddForm();
}

function changeReadStatus(button, book) {
  button.addEventListener('click', function() {
    const savedBooks = Storage.getAllBooks();
    const bookToUpdate = savedBooks.find(savedBook => savedBook.getTitle() === book.getTitle() && savedBook.getAuthor() === book.getAuthor());
    bookToUpdate['readStat'] = bookToUpdate['readStat'] ? '' : 'on';
    Storage.updateBooks(savedBooks);
    UI.readStatus(this, Storage.getBook(book));
  });
}


function deleteBook(button, book) {
  button.addEventListener('click', function() {
    const savedBooks = Storage.getAllBooks();
    const bookIndex = savedBooks.findIndex(savedBook => savedBook.getTitle() === book.getTitle() && savedBook.getAuthor() === book.getAuthor());
    savedBooks.splice(bookIndex, 1);
    Storage.updateBooks(savedBooks);
    UI.deleteBook(this)
  })
}

export default {
  addBook,
  changeReadStatus,
  deleteBook,
}
