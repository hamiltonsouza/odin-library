const myLibrary = ['The Lightning Thief', 'The Sea Of Monsters', "The Titan's Curse", 'The Battle Of The Labyrinth', 'The Last Olympian'];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${read}.` )
    }
};

function addBookToLibrary(book) {
    myLibrary.push(book);
};
