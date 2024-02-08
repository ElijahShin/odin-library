const myLibrary = [];

function Book(title, author, pageNum, isRead) {
  this.title = title;
  this.author = author;
  this.pageNum = pageNum;
  this.isRead = isRead;
}

Book.prototype.info = function() {
  return `${this.title}, by ${this.author}, ${this.pageNum} pages`;
}

function addBookToLibrary() {

  let title = prompt(`Book Title:`, "LOTR");
  let author = prompt(`Book Author:`, "J.R.R Tolkien");
  let pageNum = prompt(`Number of pages:`, 295);
  let isRead = prompt(`isRead`, false);

  const newBook = new Book(title, author, pageNum, isRead);
  myLibrary.push(newBook);
}

addBookToLibrary();
console.log(myLibrary);
