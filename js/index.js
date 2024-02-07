function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295);

console.log(theHobbit);