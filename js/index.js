function Book(title, author, pageNum) {
  this.title = title;
  this.author = author;
  this.pageNum = pageNum;
}

Book.prototype.info = function() {
  return `${this.title}, by ${this.author}, ${this.pageNum} pages`;
}

const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295);

console.log(hobbit.info());