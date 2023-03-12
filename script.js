// constants

const bookGrid = document.querySelector(".book-grid");
// clickable
const addBookBtn = document.querySelector(".addBook");

const totalForm = document.querySelector(".newBookForm");
const formCancel = document.querySelector("#cancel");
const formSubmit = document.querySelector("#submit");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const completedPagesInput = document.querySelector("#completedPages");
const totalPagesInput = document.querySelector("#totPages");
const fullyReadCheckbox = document.querySelector("#fullyRead");

const editBookInfo = document.querySelector("#editBookInfo");

// changable
const amountOfBooks = document.querySelector(".amountBooks p");
const completedBooks = document.querySelector(".booksCompleted p");

console.log(bookGrid.childElementCount);

formCancel.addEventListener("click", closeTheForm);
addBookBtn.addEventListener("click", openForm);

function alterBookAmount() {
  amountOfBooks.textContent = bookGrid.childElementCount;
}

function closeTheForm() {
  totalForm.style.display = "none";
  document.querySelector(".backgroundBlur").style.display = "none";
  alterBookAmount();
}

function openForm() {
  totalForm.style.display = "block";
  document.querySelector(".backgroundBlur").style.display = "block";
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Prototypes
Book.prototype.haveRead = function () {
  return this.read ? "Have read." : "Haven't read.";
};

Book.prototype.info = function () {
  return (
    this.title +
    " by " +
    this.author +
    " with " +
    this.pages +
    " pages. " +
    this.haveRead()
  );
};

const Hobbit = new Book("The Hobbit", "Tolkien", 208, false);

let myLibrary = [];

function addBookToLibrary() {}

// nice form function: the form reset function (form.reset()) - to reset the form
// create a formData object, iterate over it with forof loop

addBookBtn.addEventListener("click", () => {});
