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


const addBookBtn = document.querySelector('.addBook');

addBookBtn.addEventListener('click', ()=>{
    
})

