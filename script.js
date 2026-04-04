let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    let computerChoice;

    if (choice === 1) {
        computerChoice = "Rock";
    }
    else if (choice === 2) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }

    console.log("Computer's choice: " + computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let input = prompt("What's your choice?");

    if (!input) return null;

    let humanChoice = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

    if (
        humanChoice !== "Rock" &&
        humanChoice !== "Paper" &&
        humanChoice !== "Scissors")
        {
        return null;
    }

    console.log("Your choice: " + humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let result = "";

    if (humanChoice === computerChoice) {
        result = "It's a draw!";
    }
    else if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            result = "You lose! Paper beats rock!";
            computerScore += 1;
        }
        else {
            result = "You win!";
            humanScore += 1;
        }
    }
    else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            result = "You win!";
            humanScore += 1;
        }
        else {
            result = "You lose! Scissors beats paper!";
            computerScore += 1;
        }       
    }
    else {
        if (computerChoice === "Paper") {
            result = "You win!";
            humanScore += 1;
        }
        else {
            result = "You lose! Rock beats scissors!";
            computerScore += 1;
        }       
    }

    console.log("Result: " + result);
    return;
}

function playGame() {
    const times = 5;

    for(let i = 0; i < times; i++){
        const humanSelection = getHumanChoice();

        if (!humanSelection) {
            console.log("Invalid choice! Please return Rock, Paper or Scissors.");
            i--;
            continue;
        }

        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("==========================")
    }
    if (humanScore > computerScore) {
        console.log("Well done, You won!");
    }
    else if (humanScore < computerScore) {
        console.log("Oh boy, you lost!");
    }
    else {
        console.log("It's a draw!");
    }

}

playGame();





