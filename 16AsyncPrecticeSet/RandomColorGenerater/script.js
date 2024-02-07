// Variables for DOM elements
const start = document.querySelector("#startBtn")
const stop = document.querySelector("#stopBtn")
const bodyTag = document.querySelector("body")
const bgBtn = document.querySelectorAll("button")


function GenerateRandomColor() {
    return (Math.floor(Math.random() * 16777215).toString(16));
}

// Variable to store the interval function
let Intervel_fun;

// Event listener for the start button
start.addEventListener("click", () => {
    // Start the interval function to change colors every second
    Intervel_fun = setInterval(setColor, 1000);
});

// Function to set the background color and text color
const setColor = () => {
    // Set the background color of the body tag
    bodyTag.setAttribute("style", `background-color: #${GenerateRandomColor()}; color: #${GenerateRandomColor()}`);

    // Set the background color and text color of each button with the class 'bgBtn'
    bgBtn.forEach(btn => {
        btn.setAttribute("style", `background-color: #${GenerateRandomColor()}; color: #${GenerateRandomColor()}`);
    });
};

// Event listener for the stop button
stop.addEventListener("click", () => {
    // Stop the interval function
    clearInterval(Intervel_fun);
});



