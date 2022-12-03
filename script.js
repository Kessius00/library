// constants
// clickable
const addBookBtn = document.querySelector('.addBook');

const formCancel = document.querySelector('#cancel');
const formSubmit = document.querySelector('#submit');
const


// changable
const amountOfBooks = document.querySelector('.amountOfBooks p');
const completedBooks = document.querySelector('.booksCompleted p');







function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Prototypes
Book.prototype.haveRead = function(){
    return (this.read) ?  "Have read." :  "Haven't read.";
}

Book.prototype.info = function(){
    return (this.title) + ' by ' + this.author + ' with ' + this.pages + ' pages. ' + this.haveRead();
}

const Hobbit = new Book('The Hobbit', 'Tolkien', 208, false);


let myLibrary = [];

function addBookToLibrary(){

}

// nice form function: the form reset function (form.reset()) - to reset the form
// create a formData object, iterate over it with forof loop


addBookBtn.addEventListener('click', ()=>{
    
})

