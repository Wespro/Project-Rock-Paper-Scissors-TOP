//  Create getComputerChoice function
//That will randomly return either Rock, Paper or Scissors.
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);
  if (num === 1) {
    return "sissores";
  } else if (num === 2) {
    return "rock";
  } else {
    return "paper";
  }
}

//function that plays a single round of Rock Paper Scissors.
function PlayRound(computerSelection) {
  let input = prompt("Pick a rock or paper or sissores");
  if (input.toLowerCase() === computerSelection) {
    console.log("it's a tie");
  } else if (input.toLowerCase() === "rock" && computerSelection === "paper") {
    console.log("you lose you picked " + input.toLowerCase());
  } else if (input.toLowerCase() === "paper" && computerSelection === "rock") {
    console.log("you win you picked " + input.toLowerCase());
  } else if (
    input.toLowerCase() === "paper" &&
    computerSelection === "sissores"
  ) {
    console.log("you lose you picked " + input.toLowerCase());
  } else if (
    input.toLowerCase() === "sissores" &&
    computerSelection === "paper"
  ) {
    console.log("you win you picked " + input.toLowerCase());
  } else if (
    input.toLowerCase() === "sissores" &&
    computerSelection === "rock"
  ) {
    console.log("you lose you picked " + input.toLowerCase());
  } else if (
    input.toLowerCase() === "rock" &&
    computerSelection === "sissores"
  ) {
    console.log("you win you picked " + input.toLowerCase());
  }
}

//function called game().
//Call the playRound function inside of this one to play a 5 round game
// that keeps score and reports a winner or loser at the end.
function game() {
  for (let i = 0; i < 5; i++) {
    PlayRound(getComputerChoice());
  }
}
game();
