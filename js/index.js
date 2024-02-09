const myLibrary = [
                    {
                      title: `LOTR`,
                      author: `J.R.R Tolkien`,
                      pages: "295",
                      isRead: false,
                    }
                  ];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.info = function() {
  return `${this.title}, by ${this.author}, ${this.pages} pages`;
}

function addBookToLibrary() {

  let title = prompt(`Book Title:`, `LOTR`);
  let author = prompt(`Book Author:`, `J.R.R Tolkien`);
  let pages = prompt(`Number of pages:`, 295);
  let isRead = prompt(`isRead`, false);

  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

function displayBookInfo() {
  const main = document.querySelector('main');
  const bookCard = document.createElement(`div`);
  bookCard.className = `book-card`;
  
  myLibrary.forEach(ele => {

    bookCard.innerHTML = 
    `<p class="title">${ele.title}</p>
    <p class="author">${ele.author}</p>
    <p class="pages">${ele.pages}</p>
    <button class="isread">${ele.isRead}</button>
    <button class="delete">delete</button>`;
    
  })
    
  main.appendChild(bookCard);
  
}

// addBookToLibrary();
// console.log(myLibrary);
displayBookInfo();
