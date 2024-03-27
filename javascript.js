let newBookModal = document.getElementById("new-book-modal");
let newBookButton = document.getElementById("new-book-button");
let closeButton = document.getElementById("close-button");

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

const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     return (`${this.title} by ${this.author}, ${this.pages} pages, ${read}.` )
    // };
};

function addBookToLibrary(book) {
    myLibrary.push(book);
    myLibrary.forEach( book => {
        const tableRow = document.createElement("tr");
        Object.keys(book).forEach(key => {
            console.log(typeof(key));
            const currentElement = document.createElement("td");
            currentElement.textContent = book[key];
            tableRow.appendChild(currentElement);
        });
        bookTable.appendChild(tableRow);
    });
};

let bookTable = document.querySelector(".book-table");


const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submitButtonClick);
function submitButtonClick(event) {
    event.preventDefault();
    let bookTitle = document.getElementById("book-title").value;
    let bookAuthor = document.getElementById("book-author").value;
    let bookPages = document.getElementById("book-pages").value;
    let bookRead = document.getElementById("book-read").value;
    const newBook =  new Book(bookTitle, bookAuthor, bookPages, bookRead);
    addBookToLibrary(newBook);
    newBookModal.style.display = "none";
};
