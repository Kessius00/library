<<<<<<< HEAD
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
=======


const submit = document.querySelector(".submitBtn");
const cancel = document.querySelector(".cancel");
>>>>>>> a7305443abcd35cb75fde4485519795d22bb9794

const editBookInfo = document.querySelector("#editBookInfo");

<<<<<<< HEAD
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
=======
function formLeave(event){
    event.preventDefault();
}

submit.addEventListener('click', formLeave);
cancel.addEventListener('click', formLeave);

function openForm(){
    document.getElementById("popUpform").style.display = 'block';
    document.getElementById('middlepage').style.display = 'none';
}

function closeForm(){
    document.getElementById('popUpform').style.display = 'none';
    document.getElementById('middlepage').style.display = 'block';
}


// actual functionality of the main idea
const booksLayout = document.querySelector('.booksLayout');
const newDiv = document.createElement('div');
submit.addEventListener('click', addBookToLibrary);


>>>>>>> a7305443abcd35cb75fde4485519795d22bb9794

const Hobbit = new Book("The Hobbit", "Tolkien", 208, false);

let myLibrary = [];

<<<<<<< HEAD
function addBookToLibrary() {}
=======
function Book() {
  // the constructor...

}
>>>>>>> a7305443abcd35cb75fde4485519795d22bb9794


booksLayout.appendChild(newDiv);

<<<<<<< HEAD
addBookBtn.addEventListener("click", () => {});
=======

function addBookToLibrary() {
  // do stuff here
    let newBook = newDiv;
    newBook.textContent = 'bbook 1';
    
    myLibrary.push(newBook)

    for (i in myLibrary){
        booksLayout.appendChild(i)
    }
}   


submit.addEventListener('click', addBookToLibrary)
>>>>>>> a7305443abcd35cb75fde4485519795d22bb9794
