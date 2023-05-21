function Book(bookData) {
    this.title = bookData.title;
    this.author = bookData.author;
    this.pages = bookData.pages;
    this.readStat = bookData.readStat;
}

Book.prototype.getTitle = function() {
    return this.title;
}

Book.prototype.getAuthor = function() {
    return this.author;
}

Book.prototype.getPages = function() {
    return this.pages;
}

Book.prototype.getReadStat = function() {
    return this.readStat;
}

module.exports = Book