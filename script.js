let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const resultDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (gameOver) return;

        const humanChoice = button.id;
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    });
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    let computerChoice;

    if (choice === 1) {
        computerChoice = "Rock";
    } else if (choice === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    let result = "";

    if (humanChoice === computerChoice) {
        result = "It's a draw!";
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            result = "You lose! Paper beats rock!";
            computerScore += 1;
        } else {
            result = "You win!";
            humanScore += 1;
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            result = "You win!";
            humanScore += 1;
        } else {
            result = "You lose! Scissors beats paper!";
            computerScore += 1;
        }
    } else {
        if (computerChoice === "Paper") {
            result = "You win!";
            humanScore += 1;
        } else {
            result = "You lose! Rock beats scissors!";
            computerScore += 1;
        }
    }

    resultDiv.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${result}`;
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore >= 5) {
        winnerDiv.textContent = "Well done, you won the game!";
        gameOver = true;
    } else if (computerScore >= 5) {
        winnerDiv.textContent = "Oh boy, you lost the game!";
        gameOver = true;
    }
}
