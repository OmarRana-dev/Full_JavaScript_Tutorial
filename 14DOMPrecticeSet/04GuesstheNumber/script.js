let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".form");

const btn = document.createElement("button");
const btnSubmit = document.createElement("input");

let counter = 10;

submit.addEventListener("click", (e) => {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    numComparesion(guess);
});

function numComparesion(guess) {
    if (guess > 100) {
        inputClear();
        alert("Please Enter a Number less then 100.");
    } else if (guess < 0) {
        inputClear();
        alert("Please Enter a Number Greater then 0.");
    } else if (isNaN(guess)) {
        inputClear();
        alert("Please Enter a Valid Number.");
    } else {
        if (guess > randomNumber) {
            inputClear();
            lowOrHi.innerHTML = `that high`;
            remaining.innerHTML = --counter;
            guessSlot.innerHTML += `${guess}, `;
        } else if (guess < randomNumber) {
            inputClear();
            lowOrHi.innerHTML = `that low`;
            remaining.innerHTML = --counter;
            guessSlot.innerHTML += `${guess}, `;
        } else if (guess === randomNumber) {
            remaining.innerHTML = --counter;
            inputClear();
            gameWon();
        }
    }
    if (remaining.innerHTML == 0) {
        console.log(remaining.innerHTML)
        lostGame()
    }
}

function inputClear() {
    userInput.value = "";
}

function lostGame() {
    lowOrHi.innerHTML = "YOU LOSE THE GAME 😴😴😴";
    startAgainbtn();
}
function gameWon() {
    lowOrHi.innerHTML = "YOU DID IT 🔥🔥🔥";
    startAgainbtn();
}


function startAgainbtn() {
    userInput.setAttribute("disabled", "");
    startOver.lastElementChild.remove();
    btn.classList.add("restartGame");
    btn.innerHTML = "Start Again";
    startOver.appendChild(btn);
}

// Restart Game Functions
const restartGame = document.querySelector(".restartGame");
restartGame.addEventListener("click", () => {
    startOver.lastElementChild.remove();
    setAttributes(btnSubmit, attributes);
    startOver.appendChild(btnSubmit);
    counter = 10;
    gameStart = true
});
// add values in submit button after appending  
const attributes = {
    type: "submit",
    value: "Submit geuss",
    class: "guessSubmit",
    id: "subt",
};
function setAttributes(element, attributes) {
    Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
    });
}
