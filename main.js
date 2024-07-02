//User inputs a number and press go
//If user guesses the correct number, output Correct!
//Random number < User input output Down!
// Random number > User input output Up!
//When Reset button is clicked, game resets
//Game ends after 3 tries. (no more tries and button is disabled)
//If user inputs outside of range (1 ~ 100) then let them know. Also the number of try count does not change.
//If user inputs the same number, let them know and count does not change.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let randomNumber = document.getElementById("random-number");
let triesArea = document.getElementById("tries-area");
let tries = 3;
let gameOver = false;
let history = [];
let historyList = document.getElementById("history");


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
    userInput.value = "";
})
function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1; // Math.random only pulls 0 - 99 so we have added 1 to set the range 1 - 100
    return randomNumber.textContent = computerNum;
}

function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "Number must be between 1 to 100";
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "Number has been already tried";
        return;
    }

    tries--;
    triesArea.textContent = `Number of tries left: ${tries}`;


    if (userValue < computerNum) {
        resultArea.textContent = "UP!!"
    } else if (userValue > computerNum) {
        resultArea.textContent = "DOWN!!"
    } else {
        resultArea.textContent = "CORRECT!!"
        playButton.disabled = true;
    }

    history.push(userValue);
    historyList.textContent = `You have entered following numbers: ${history}`;


    if (tries == 0) {
        gameOver = true;

    }

    if (gameOver == true) {
        playButton.disabled = true;
        resultArea.textContent = "Game Over";
    }
}

function reset() {
    // user input has to be cleared
    userInput.value = "";
    // generate new random number
    pickRandomNum();

    resultArea.textContent = "Result is here"
    gameOver = false;
    playButton.disabled = false;
    history = [];
    historyList.textContent = "";
    tries = 3;
    triesArea.innerHTML = `Number of tries: ${tries}`;

}



pickRandomNum();