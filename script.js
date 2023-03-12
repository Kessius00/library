

const submit = document.querySelector(".submitBtn");
const cancel = document.querySelector(".cancel");


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




let myLibrary = [];

function Book() {
  // the constructor...

}


booksLayout.appendChild(newDiv);


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