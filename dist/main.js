/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dom */ \"./src/Dom.js\");\n\n\n\n\nfunction addBook() {\n  const form = document.querySelector('.bookForm')\n\n  form.addEventListener('submit', function(event) {\n    event.preventDefault();\n    const bookData = Object.fromEntries(new FormData(this));\n\n    if (Object.values(bookData).some(value => value.trim() === '')) {\n      _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inputIsValid();\n      return\n    } else if (_Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getBook(bookData)) {\n      alert('you already have that book!')\n      this.reset()\n      return\n    }\n    \n    _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveBook(bookData);\n    _Dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createBookCard(bookData)\n    _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showHideForm();\n  })\n  _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayAddForm();\n}\n\nfunction changeReadStatus(button, book) {\n  button.addEventListener('click', function() {\n    const savedBooks = _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAllBooks();\n    const bookToUpdate = savedBooks.find(savedBook => savedBook.getTitle() === book.getTitle() && savedBook.getAuthor() === book.getAuthor());\n    bookToUpdate['readStat'] = bookToUpdate['readStat'] ? '' : 'on';\n    _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateBooks(savedBooks);\n    _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].readStatus(this, _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getBook(book));\n  });\n}\n\n\nfunction deleteBook(button, book) {\n  button.addEventListener('click', function() {\n    const savedBooks = _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAllBooks();\n    const bookIndex = savedBooks.findIndex(savedBook => savedBook.getTitle() === book.getTitle() && savedBook.getAuthor() === book.getAuthor());\n    savedBooks.splice(bookIndex, 1);\n    _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateBooks(savedBooks);\n    _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteBook(this)\n  })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  addBook,\n  changeReadStatus,\n  deleteBook,\n});\n\n\n//# sourceURL=webpack://library/./src/App.js?");

/***/ }),

/***/ "./src/Book.js":
/*!*********************!*\
  !*** ./src/Book.js ***!
  \*********************/
/***/ ((module) => {

eval("function Book(bookData) {\n    this.title = bookData.title;\n    this.author = bookData.author;\n    this.pages = bookData.pages;\n    this.readStat = bookData.readStat;\n}\n\nBook.prototype.getTitle = function() {\n    return this.title;\n}\n\nBook.prototype.getAuthor = function() {\n    return this.author;\n}\n\nBook.prototype.getPages = function() {\n    return this.pages;\n}\n\nBook.prototype.getReadStat = function() {\n    return this.readStat;\n}\n\nmodule.exports = Book\n\n//# sourceURL=webpack://library/./src/Book.js?");

/***/ }),

/***/ "./src/Dom.js":
/*!********************!*\
  !*** ./src/Dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\n\n\nfunction createBookCard(book) {\n    const bookList = document.querySelector('main');\n    const addCard = document.querySelector('.addCard');\n\n    const bookData = _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getBook(book);\n\n    const readStatButton = document.createElement('button');\n    _UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].readStatus(readStatButton, bookData);\n\n    const deleteButton = document.createElement('button');\n    deleteButton.textContent = 'Delete';\n    deleteButton.classList.add('deleteBook')\n\n    const bookCard = document.createElement('div');\n    bookCard.classList.add('book-card');\n    bookCard.innerHTML = `\n        <p>\"${bookData.getTitle()}\"</p>\n        <p>By ${bookData.getAuthor()}</p>\n        <p>${bookData.getPages()} pages</p>\n    `\n\n    bookCard.append(readStatButton, deleteButton)\n    bookList.insertBefore(bookCard, addCard);\n    _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeReadStatus(readStatButton, bookData);\n    _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteBook(deleteButton, bookData)\n}\n\nfunction loadBooks() {\n    const savedBooks = _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAllBooks();\n    savedBooks.forEach(book => createBookCard(book))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    createBookCard,\n    loadBooks,\n});\n\n//# sourceURL=webpack://library/./src/Dom.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book */ \"./src/Book.js\");\n/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Book__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction saveBook(book) {\n    const savedBooks = getAllBooks();\n    const newBook = new (_Book__WEBPACK_IMPORTED_MODULE_0___default())(book);\n    savedBooks.push(newBook);\n    localStorage.setItem('books', JSON.stringify(savedBooks))\n}\n\nfunction getAllBooks() {\n    const storedBooks = JSON.parse(localStorage.getItem('books'));\n    return storedBooks ? storedBooks.map(book => new (_Book__WEBPACK_IMPORTED_MODULE_0___default())(book)) : []\n}\n\nfunction getBook(newBook) {\n    const storedBooks = getAllBooks();\n    return storedBooks.find(book => book.getTitle() === newBook.title && book.getAuthor() === newBook.author)\n}\n\nfunction updateBooks(books) {\n    localStorage.setItem('books', JSON.stringify(books))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    saveBook,\n    getAllBooks,\n    getBook,\n    updateBooks\n});\n\n//# sourceURL=webpack://library/./src/Storage.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction showHideForm() {\n    const formBox = document.querySelector('.addForm');\n    const form = document.querySelector('.bookForm');\n    const addButton = document.querySelector('.add');\n    formBox.classList.toggle('showForm')\n    addButton.classList.toggle('hideAdd')\n    form.reset()\n}\n\nfunction displayAddForm() {\n    const addButton = document.querySelector(\".addButton\");\n    const cancelAdd = document.querySelector('.cancelAdd');\n\n    addButton.addEventListener('click', showHideForm)\n    cancelAdd.addEventListener('click', function() {\n        const inputs = document.querySelectorAll('.bookForm input');\n        inputs.forEach(input => input.classList.remove('invalid'))\n        showHideForm();\n    })\n}\n\nfunction inputIsValid() {\n    const inputs = document.querySelectorAll('.bookForm input');\n    function isInvalid(input) {\n        input.classList.toggle('invalid', input.value === '');\n    };\n\n    inputs.forEach(function(input) {\n        input.addEventListener('input', function() {\n            isInvalid(input);\n        })\n        isInvalid(input)\n    })\n};\n\nfunction readStatus(button, book) {\n    const isRead = book.getReadStat() ? true:false;\n    const buttonText = isRead ? 'Have Read' : 'To Read';\n    const toggleClass = 'haveRead';\n\n    button.textContent = buttonText;\n    button.classList.toggle(toggleClass, isRead);\n}\n\nfunction deleteBook(button) {\n    button.parentNode.remove();\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    displayAddForm,\n    showHideForm,\n    inputIsValid,\n    readStatus,\n    deleteBook,\n});\n\n//# sourceURL=webpack://library/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dom */ \"./src/Dom.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', function() {\n    _Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadBooks()\n    _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addBook();\n})\n\n//# sourceURL=webpack://library/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;