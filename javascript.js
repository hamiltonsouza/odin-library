var newBookModal = document.getElementById("new-book-modal");
var newBookButton = document.getElementById("new-book-button");
var closeButton = document.getElementsByClassName("close-button")[0];

newBookButton.onclick = function() {
    newBookModal.style.display = "block";
};

closeButton.onclick = function() {
    newBookModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == newBookModal) {
    newBookModal.style.display = "none";
  }
};

const lightningThief = {title:'The Lightning Thief', author:'Rick Riordan', pages: 377, read: true};

const myLibrary = [lightningThief];

// , 'The Sea Of Monsters', "The Titan's Curse", 'The Battle Of The Labyrinth', 'The Last Olympian'

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${read}.` )
    };
};

function addBookToLibrary(book) {
    myLibrary.push(book);
};

let bookTable = document.querySelector(".book-table");

myLibrary.forEach( book => {
    const tableRow = document.createElement("tr");
    Object.keys(lightningThief).forEach(key => {
        const currentElement = document.createElement("td");
        currentElement.textContent = book[key];
        tableRow.appendChild(currentElement);
    });
    bookTable.appendChild(tableRow);
});

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submitButtonClick);
function submitButtonClick(event) {
    event.preventDefault();
    let bookTitle = document.getElementById("book-title").value;
    let bookAuthor = document.getElementById("book-author").value;
    let bookPages = document.getElementById("book-pages").value;
    let bookRead = document.getElementById("book-read").value;
    const newBook =  new Book(bookTitle, bookAuthor, bookPages, bookRead);
    console.log(bookTitle);
    console.log(bookRead);
    addBookToLibrary(newBook);
    console.log(newBook);
};
