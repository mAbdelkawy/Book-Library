// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Array to hold book objects
let myLibrary = [];

// Function to add a book to the library
function addBookToLibrary() {
  // Get input values from the form
  const bookNameInput = document.querySelector("#name");
  const bookAuthorInput = document.querySelector("#author");
  const numOfPagesInput = document.querySelector("#numOfPages");
  const readStatusInput = document.querySelector("#readStatus");

  // Create a new book object from the input values
  const newBook = new Book(
    bookNameInput.value,
    bookAuthorInput.value,
    numOfPagesInput.value,
    readStatusInput.checked
      ? "I have read the book"
      : "I have not read the book"
  );

  // Add the new book to the library array
  myLibrary.push(newBook);

  // Update the book list on the page
  updateBooks();
}

// Function to update the book list on the page
function updateBooks() {
  // Get the book list container
  let booksContainer = document.querySelector(".book-collection");
  // Clear the container
  booksContainer.innerHTML = "";

  // Loop through the library array and create a card for each book
  myLibrary.forEach((book) => {
    const card = document.createElement("div");

    const title = document.createElement("p");
    title.textContent = `Title: ${book.title}`;
    card.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    card.appendChild(pages);

    const read = document.createElement("p");
    read.textContent = `Read Status: ${book.read}`;
    card.appendChild(read);

    booksContainer.appendChild(card);
  });
}

// Get the book form and add a submit event listener
const bookForm = document.querySelector("#bookForm");
bookForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Add the new book to the library and reset the form
  addBookToLibrary();
  bookForm.reset();
});

// Call the updateBooks function to display any existing books on the page
updateBooks();
