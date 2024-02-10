const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = "Not read";
}

Book.prototype.info = function() {
  return `${this.title}, by ${this.author}, ${this.pages} pages`;
}

//Add book to dataset
function addBookToLibrary() {

  let title = document.getElementById(`title`);
  let author = document.getElementById(`author`);
  let pages = document.getElementById(`pages`);
  let read = document.getElementById(`read`);

  const newBook = new Book(title.value, author.value, pages.value);
  myLibrary.push(newBook);

  title.value = ``;
  author.value = ``;
  pages.value = ``;
  read.value = ``;
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
    <button class="read-btn">${ele.read}</button>
    <button class="delete">delete</button>`;
    
  })
  main.appendChild(bookCard);
  toggleReadBtn();
  
}

function toggleReadBtn() {
  const readBtn = document.querySelector(`.read-btn`);
  
  readBtn.addEventListener(`click`, event => {
    if(readBtn !== null) {
      readBtn.textContent === `Not read` ? readBtn.textContent = `read` : readBtn.textContent = `Not read`;
    
    }
      
    }); 
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