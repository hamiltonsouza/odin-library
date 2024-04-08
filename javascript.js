let newBookModal = document.getElementById("new-book-modal");
let newBookButton = document.getElementById("new-book-button");
let closeButton = document.getElementById("close-button");
let deleteButton = document.getElementsByClassName("delete-button");

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
};

function addBookToLibrary(book) {
    myLibrary.push(book);
    printLibraryTable(book);
};

function printLibraryTable(book) {
    const tableRow = document.createElement("tr");
    const bookTitle = document.createElement("td");
    bookTitle.textContent = book.title;
    tableRow.appendChild(bookTitle);
    const bookAuthor = document.createElement("td");
    bookAuthor.textContent = book.author;
    tableRow.appendChild(bookAuthor);
    const bookPages = document.createElement("td");
    bookPages.textContent = book.pages;
    tableRow.appendChild(bookPages);
    const bookRead = document.createElement("td");
    const bookReadCheckbox = document.createElement("input");
    bookReadCheckbox.setAttribute("type", "checkbox");
    bookReadCheckbox.checked = book.read;
    bookReadCheckbox.addEventListener('change', function() {
        if (this.checked) {
            book.read = true;
        } else {book.read = false}
    });
    bookRead.appendChild(bookReadCheckbox);
    tableRow.appendChild(bookRead);
    tableRow.dataset.libraryIndex = myLibrary.indexOf(book);
    bookTable.appendChild(tableRow);
    const deleteButtonCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", function () {
        myLibrary.splice(deleteButton.closest("tr").dataset.libraryIndex, 1);
        tableRow.remove();
    });
    deleteButton.setAttribute("type", "button")
    deleteButton.textContent = "×";
    deleteButtonCell.appendChild(deleteButton);
    tableRow.appendChild(deleteButtonCell);
}

let bookTable = document.querySelector(".book-table");


const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submitButtonClick);
function submitButtonClick(event) {
    event.preventDefault();
    let bookTitle = document.getElementById("book-title").value;
    let bookAuthor = document.getElementById("book-author").value;
    let bookPages = document.getElementById("book-pages").value;
    let bookRead = document.getElementById("book-read").checked;
    const newBook =  new Book(bookTitle, bookAuthor, bookPages, bookRead);
    addBookToLibrary(newBook);
    document.getElementById("book-title").value = '';
    document.getElementById("book-author").value = '';
    document.getElementById("book-pages").value = '';
    document.getElementById("book-read").checked = false;
    newBookModal.style.display = "none";
};
