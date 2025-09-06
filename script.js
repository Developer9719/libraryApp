const books = []; // Array of book objects
const displayElement = document.getElementsByTagName('tbody')[0];
// The [0] selects the first element in the HTML Collection
let iteration = -1;

function Book(title, author) { // Book object constructor
    // Uses the variable passed in as the instance variable
    id = crypto.randomUUID(); // Sets random ID 
    this.title = title,
    this.author = author
}

function addBookToArray(name, author) {
    /**
     * Takes in arguments
     */
    this.name = name;
    this.author = author;
    /** Create a book object from the arguments
     * - Each book needs a unique ID (crypto.randomUUID()) 
     */
    const book = new Book(name, author);
    /** 
     * Store the new object in the array
     */
    books.push(book);
    displayBooks(book);
}

addBookToArray('Lost City of Faar', 'DJ MacHale');
addBookToArray('Merchant of Death', 'DJ MacHale');
addBookToArray('The Reality Bug', 'DJ MacHale');
addBookToArray('Sylo', 'DJ MacHale');
addBookToArray('Black Water', 'DJ MacHale');

function displayBooks(book) {
    iteration++;
    displayElement.insertAdjacentHTML("beforeend",`<tr id="${iteration}"><td class="book">${book.title}</td>
        <td class="book">${book.author}</td><td><button onclick="editBook(${iteration})">Edit</button></td><td>
        <button onclick="deleteBook(${iteration})">Delete</button></td></tr>`);

}

// books.foreach(displayBooks()); - Paases the result of the displayBooks 
// function and since it doesnt return anything the result is always
// undefined

// books.forEach(displayBooks) - Passes a function reference, therefore 
// telling the line to run the function

// Local Form Processing
const form = document.getElementById('newBookForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get Form Data
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;

    // Form Validation
    if(!bookTitle) {
        alert('Please enter a book title');
        return;
    } else if(!bookAuthor) {
        alert('Please enter a book author');
        return;
    }

  addBookToArray(bookTitle, bookAuthor);
});

function deleteBook(id) { 
    books.splice(id, 1); // Removes book from array
    document.getElementById(id).remove(); // Removes book from display
    // Rebuild display to update IDs
    displayElement.innerHTML = '';
    iteration = -1;
    books.forEach(displayBooks);
}

function editBook(id) {
    const book = books[id];
    const newTitle = prompt('Enter new title:', book.title);
    const newAuthor = prompt('Enter new author:', book.author);

    if (newTitle !== null && newTitle.trim() !== '') {
        book.title = newTitle.trim();
    }
    if (newAuthor !== null && newAuthor.trim() !== '') {
        book.author = newAuthor.trim();
    }

    //.trim() removes whitespace from both ends of a string

    // Update display
    displayElement.innerHTML = '';
    iteration = -1;
    books.forEach(displayBooks);
}