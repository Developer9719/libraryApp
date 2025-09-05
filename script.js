const books = []; // Array of book objects
const displayElement = document.getElementsByTagName('tbody')[0];
// The [0] selects the first element in the HTML Collection

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
    console.log(book.name);
    displayElement.insertAdjacentHTML("beforeend",`<tr><td class="book">${book.title}</td>
        <td class="book">${book.author}</td><td><button>Edit</button></td><td>
        <button>Delete</button></td></tr>`);

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