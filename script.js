

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



let myLibrary = ['<div>hoi</div>'];

function Book() {
  // the constructor...

}

function addBookToLibrary() {
  // do stuff here
  for(i in myLibrary){
      booksLayout.appendChild(i)
      
  }
}


submit.addEventListener('click', addBookToLibrary)