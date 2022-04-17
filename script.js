function computerPlay() {
    const roshambo = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * roshambo.length);

    return roshambo[random];
}

console.log(computerPlay());

function playGame() {
    let playerSelection = prompt("Let's play a game! Pick rock, paper or scissors!");


}