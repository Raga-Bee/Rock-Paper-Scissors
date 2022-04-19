function computerPlay() {
    const roshambo = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * roshambo.length);

    return roshambo[random];
}

const playerSelection = prompt("Let's playa game! Pick rock, paper or scissors.").toLowerCase();
console.log(playerSelection)

const computerSelection = computerPlay();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie.";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You Win";
        } else {
            return "You Lose";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win";
        } else {
            return "You Lose";
        }
    }
    else if(playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You Win";
        } else {
            return "You Lose";
        }
    }
}

console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {

    }

}