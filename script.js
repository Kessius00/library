function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.info = function(){
    return (this.title) + ' by ' + this.author + ' with ' + this.pages + ' pages.'
}

const Hobbit = new Book('The Hobbit', 'Tolkien', 208);

console.log(Hobbit.info())