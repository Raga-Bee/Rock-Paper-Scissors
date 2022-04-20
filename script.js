function computerPlay() {
    const roshambo = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * roshambo.length);

    return roshambo[random];
}

let playerScore = 0;
let compScore = 0;

function playRound() {
    const playerSelection = prompt("Let's playa game! Pick rock, paper or scissors.").toLowerCase();
    
    const computerSelection = computerPlay();
    console.log(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        return "It's a tie.";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return playerScore++ ;
           
        } else {
            return compScore++;
         
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return playerScore++;
          
        } else {
            return compScore++;
            
        }
    }
    else if(playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return playerScore++;
           
        } else {
            return compScore++;
            
        }
    }
}


function game() {

    for (let i = 0; i < 5; i++) {
       playRound() ;
       }
    console.log(playerScore, compScore);
}

function newGame() {
    playerScore = 0;
    compScore = 0;
    game();
    if (playerScore  > compScore) {
        console.log("You Win")
    } else {
        console.log("Your Lose")
    }
}



newGame();