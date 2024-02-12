// DOM element references
const updateButton = document.querySelector("#updateDetails"); // Button to open update dialog
const cancelButton = document.querySelector("#cancel"); // Button to close update dialog
const dialog = document.querySelector("dialog"); // Element for the update dialog box
const container = document.querySelector(".Container"); // Container to display book cards

// Book information input fields
const bookTitle = document.querySelector("#title");
const bookAuther = document.querySelector("#auther");
const bookGenre = document.querySelector("#genre");
const bookPages = document.querySelector("#pages");
const submitBtn = document.querySelector("#submit"); // Button to add new book


// Array to store book objects
const myLibrary = [];

// Book constructor function
function book(title, auther, genre, pages) {
    this.title = title;
    this.auther = auther;
    this.genre = genre;
    this.pages = pages;
}

// Initial set of books in the library
myLibrary.push(new book("The Four Agreements", "Don Miguel Ruiz", "Self Help", 163))
myLibrary.push(new book("The Power of Now", "Eckhart Tolle", "Self Help", 258))
myLibrary.push(new book("Atomic Habits", "James Clear", "Self Help", 157))
addBooktoLibrary()


// Event listener for the "Submit" button
submitBtn.addEventListener("click", () => {
    // Validate if all required fields have values
    if (bookTitle.value === "" || bookAuther.value === "" || bookGenre.value === "" || bookPages.value === "") {
        console.log("All values are required"); // Log a message to the console if any field is empty
    } else {
        // Create a new book object using the input values
        const newBook = new book(bookTitle.value, bookAuther.value, bookGenre.value, bookPages.value);

        // Add the new book to the library array
        myLibrary.push(newBook);

        // Update the displayed book cards
        addBooktoLibrary();
    }
});


// Function to display all books in the library
function addBooktoLibrary() {
    container.innerHTML = ""; // Clear previous content

    for (let i in myLibrary) {
        const book = myLibrary[i];
        AppendBox(book, i); // Create and append book card for each book
    }

    // Attach event listeners to newly added close buttons
    const closeBtns = document.querySelectorAll(".closeBtn");
    closeBtns.forEach((element) => {
        element.addEventListener("click", () => {
            const index = Number(element.id);
            myLibrary.splice(index, 1); // Remove book from library array
            addBooktoLibrary(); // Re-render the library
        });
    });
}


// Function to create and append a book card to the container
function AppendBox(book, index) {
    const box = document.createElement("div");
    box.classList.add("bookBoxs");

    box.innerHTML = `
    <div class="closeBtn" id="${index}"> <i class="fa-solid fa-xmark"></i> </div>
    <div class="g1">
      <h1>${book.title}</h1>
      <p>Auther: ${book.auther}</p>
      <p>Genre: ${book.genre}</p>
    </div>
    <div class="g2">
      <div class="innerG1">
        <p>Pages:</p>
        <p>${book.pages}</p>
      </div>
      <div class="innerG2">
        <p>Read it?</p>
        <input type="checkbox"> 
      </div>
    </div>
  `;

    container.appendChild(box);
}

// Open the update dialog box when update button is clicked
updateButton.addEventListener("click", () => {
    dialog.showModal();
});

// Close the update dialog box when cancel button is clicked
cancelButton.addEventListener("click", () => {
    dialog.close();
});

// Add initial books to the library
addBooktoLibrary();

// Implement form submission logic to capture input and update book details
// ... (code not provided, add your logic here)

// Implement logic to handle book removal based on close button click
// ... (code already provided in AppendBox function)