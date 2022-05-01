function computerPlay() {
    const roshambo = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * roshambo.length);

    return roshambo[random];
}

let score = {
    Player:0,
    Computer:0,
}

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const playerScore = document.querySelector('#player-score');
const compScore = document.querySelector('#computer-score');
const textResult = document.querySelector('#text-result');
    

function playRound(playerSelection) {
    
    const computerSelection = computerPlay();
    
    console.log(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        textResult.textContent="It's a draw.";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            score.Player+=1 ;
            textResult.textContent="You win!";
            playerScore.innerText = score.Player+"";
           
        } else {
            score.Computer+=1;
            textResult.textContent="You Lose!";
            compScore.innerText = score.Computer+"";
         
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            score.Player+=1;
            textResult.textContent="You Win!"
            playerScore.innerText = score.Player+"";
          
        } else {
            score.Computer+=1;
            textResult.textContent="You Lose!";
            compScore.innerText = score.Computer+"";
            
        }
    }
    else if(playerSelection === "scissors") {
        if (computerSelection === "paper") {
            score.Player+=1;
            textResult.textContent="You Win1";
            playerScore.innerText= score.Player+"";
           
        } else {
            score.Computer+=1;
            textResult.textContent="You Lose!";
            compScore.innerText= score.Computer+"";
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

btnRock.addEventListener('click', function(){playRound('rock')});
btnPaper.addEventListener('click', function(){playRound('paper')});
btnScissors.addEventListener('click', function(){playRound('scissors')});