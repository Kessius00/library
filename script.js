
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
const submit = document.querySelector(".submitBtn");
const cancel = document.querySelector(".cancel");
const form = document.querySelector('#formNewBook');

const Hobbit = new Book("The Hobbit", "Tolkien", 208, false);

cancel.addEventListener('click', (e)=>{
    e.preventDefault();
});


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};


let myLibrary = [Hobbit];


form.addEventListener('submit', (e) => {

    e.preventDefault()

    // all the inputfields of the form
    const bookName = document.querySelector('#BookName').value;
    const authorName = document.querySelector('#AuthorName').value;
    const pagesRead = document.querySelector('#pagesRead').value;
    const didRead = document.querySelector('#didRead').checked;

    let book = new Book(bookName, authorName, pagesRead, didRead);
    myLibrary.push(book);

    console.log(myLibrary);

    closeForm();
    
    addBookToLibrary();


    });


function addBookToLibrary() {
  // do stuff here
    while (booksLayout.firstChild) {
        booksLayout.removeChild(booksLayout.lastChild);
    }

    for (let i=0; i<myLibrary.length; i++){
        const book = myLibrary[i];
        let gridItem = document.createElement('div');

        gridItem.classList.add('book');
        gridItem.textContent = `${book.title} by ${book.author}`;


        let pages = document.createElement('div');
        pages.textContent = `${book.pages} pages`


        let bookRemove = document.createElement('button');
        bookRemove.classList.add('bookRemove');
        bookRemove.textContent = 'remove book';


        let haveReadToggle = document.createElement('button');
        if (book.read == true){
            haveReadToggle.classList.toggle('haveReadYes');
            haveReadToggle.textContent = 'have read';
        } else {
            haveReadToggle.classList.toggle('haveReadNo');
            haveReadToggle.textContent = 'not yet read';
        }
        
        gridItem.appendChild(pages);
        gridItem.appendChild(haveReadToggle);
        gridItem.appendChild(bookRemove);
        


        
        booksLayout.appendChild(gridItem);

    }
};





// haveReadToggle.addEventListener('click', updateReadStatus);


// function updateReadStatus(){
//     haveReadToggle.classList.toggle('haveReadYes');
//     haveReadToggle.classList.toggle('haveReadNo');

// };





// create a formData object, iterate over it with forof loop

