const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = "Not read";
}

Book.prototype.info = function() {
  return `${this.title}, by ${this.author}, ${this.pages} pages`;
}

//Add book to dataset
function addBookToLibrary() {

  let title = document.getElementById(`title`);
  let author = document.getElementById(`author`);
  let pages = document.getElementById(`pages`);
  let isRead = document.getElementById(`read`);

  const newBook = new Book(title.value, author.value, pages.value, isRead.value);
  myLibrary.push(newBook);
}

//Handle adding book ui button functionality
function addBookBtn() {
  const dialog = document.querySelector('dialog');
  const submitBtn = document.querySelector(`button[type="submit"]`);

  submitBtn.addEventListener(`click`, event => {

    event.preventDefault();
    dialog.close();

    addBookToLibrary();
    displayBookInfo();
  });
}

//Display book info on ui
function displayBookInfo() {
  const main = document.querySelector(`.book-catalogue`);
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

//Open dialog button
function openDialog() {
  const dialog = document.querySelector(`dialog`);
  const newbookBtn = document.querySelector(`.new-book`);
  
  newbookBtn.addEventListener(`click`, event => {
    dialog.showModal();
  });
}

//Close dialog button
function closeDialog() {
  const dialog = document.querySelector(`dialog`);
  const closeBtn = document.querySelector(`form > button:last-child`);

  closeBtn.addEventListener(`click`, event => {
    dialog.close();
  });
  
}

addBookBtn();
openDialog();
closeDialog();