const updateButton = document.querySelector("#updateDetails");
const cancelButton = document.querySelector("#cancel");
const dialog = document.querySelector("dialog");
const container = document.querySelector(".Container")

// Book info
const bookTitle = document.querySelector("#title")
const bookAuther = document.querySelector("#auther")
const bookPages = document.querySelector("#pages")
const submitBtn = document.querySelector("#submit")


submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    container.innerHTML += `<div class="bookBoxs ${}">
        <i class="fa-solid fa-xmark"></i>
        <div class="g1">
            <h1>${bookTitle.value}</h1>
            <p>${bookAuther.value}</p>
        </div>
        <div class="g2">
            <div class="innerG1">
                <p>Pages:</p>
                <p>${bookPages.value}</p>
            </div>
            <div class="innerG2">
                <p>Reading:</p>
                <input type="checkbox" name="" id="">
            </div>
        </div>
    </div>`
    
})




// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
    dialog.showModal();
    openCheck(dialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
    dialog.close();
    openCheck(dialog);
});
