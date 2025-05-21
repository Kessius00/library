let myLibrary = [];

class Book {
  // constructor to create a new book object
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// DOM Manipulation
const booksLayout = document.querySelector(".booksLayout");

function refreshLibrary() {
  // do stuff here
  while (booksLayout.firstChild) {
    // remove all children of the booksLayout
    booksLayout.removeChild(booksLayout.lastChild);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    // loop through the myLibrary array and create a new div for each book
    const book = myLibrary[i];
    let bookElement = document.createElement("div");

    bookElement.classList.add("book");
    bookElement.textContent = `'${book.title}' by ${book.author}`;

    let pages = document.createElement("div");
    pages.textContent = `${book.pages} pages`;

    let bookRemove = document.createElement("button");
    bookRemove.classList.add("bookRemove");
    bookRemove.textContent = "remove book";

    let haveReadToggle = document.createElement("button");

    if (book.read == true) {
      haveReadToggle.classList.toggle("haveReadYes");
      haveReadToggle.textContent = "have read";
    } else {
      haveReadToggle.classList.toggle("haveReadNo");
      haveReadToggle.textContent = "not yet read";
    }

    bookElement.append(pages, haveReadToggle, bookRemove);
    booksLayout.appendChild(bookElement);

    bookRemove.addEventListener("click", () => {
      // find book in myLibrary array
      const bookIndex = myLibrary.findIndex(
        (b) => b.title === book.title && b.author === book.author
      );
      if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1); // remove book from myLibrary
      }
      // remove book from the DOM
      booksLayout.removeChild(bookElement);
    });

    haveReadToggle.addEventListener("click", () => {
      if (book.read == true) {
        book.read = false;
        haveReadToggle.classList.toggle("haveReadYes");
        haveReadToggle.classList.toggle("haveReadNo");
        haveReadToggle.textContent = "not yet read";
      } else {
        book.read = true;
        haveReadToggle.classList.toggle("haveReadNo");
        haveReadToggle.classList.toggle("haveReadYes");
        haveReadToggle.textContent = "have read";
      }
    });
  }
}

function removeInvalidClass() {
  const nameElement = document.querySelector("#BookName");
  const authorElement = document.querySelector("#AuthorName");
  const pagesElement = document.querySelector("#pagesRead");

  nameElement.classList.remove("invalid");
  authorElement.classList.remove("invalid");
  pagesElement.classList.remove("invalid");
  const errorMessage = document.querySelector(".error-message");
  errorMessage.style.display = "none";
}

function openForm() {
  document.getElementById("popUpform").style.display = "block";
  document.getElementById("middlepage").style.display = "none";
}

function closeForm() {
  document.getElementById("popUpform").style.display = "none";
  document.getElementById("middlepage").style.display = "block";
}

const newBookBtn = document.querySelector(".new_book");
newBookBtn.addEventListener("click", openForm);

// Form Validation
const form = document.querySelector("form");
const cancel = document.querySelector(".cancel");

function showError() {
  // Show an error message if the form is invalid

  const nameElement = document.querySelector("#BookName");
  const authorElement = document.querySelector("#AuthorName");
  const pagesElement = document.querySelector("#pagesRead");

  if (nameElement.validity.valueMissing) {
    nameElement.classList.add("invalid");
    // alert("Please enter a book name.");
  }
  if (authorElement.validity.valueMissing) {
    authorElement.classList.add("invalid");
    // alert("Please enter an author name.");
  }
  if (pagesElement.validity.valueMissing) {
    pagesElement.classList.add("invalid");
    // alert("Please enter the number of pages.");
  }
  const errorMessage = document.querySelector(".error-message");
  errorMessage.style.display = "block";
}

// Add event listeners to the form elements
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting
  const name = document.querySelector("#BookName").value;
  const author = document.querySelector("#AuthorName").value;
  const pages = document.querySelector("#pagesRead").value;
  const read = document.querySelector("#didRead").checked;

  // Check if the form is valid
  if (name && author && pages) {
    // Create a new book object
    const book = new Book(name, author, pages, read);
    myLibrary.push(book); // Add the book to the library
    removeInvalidClass();
    closeForm();
    refreshLibrary();
  } else {
    // Show an error message if the form is invalid
    showError();
  }
});

cancel.addEventListener("click", (e) => {
  e.preventDefault();
  removeInvalidClass();
});
