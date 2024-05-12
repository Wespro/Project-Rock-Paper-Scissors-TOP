//Varibles for buttons
const btns = document.querySelectorAll(".btn");

//Add EventListener for all btns
btns.forEach((element) => {
  element.addEventListener("click", PlayRound);
});

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

//Function that plays a single round of Rock Paper Scissors.

//Varibles for playround
let youResult = 0;
let computerResult =0;
let tieResult = 0;
const you = document.querySelector(".youResult .count");
const computer = document.querySelector(".computerResult .count ");
const tie = document.querySelector(".tieResult .count");
const roundResult = document.querySelector(".roundResult");
const winner = document.querySelector(".winner");

function PlayRound(event) {
  //Getting the computerSelection every try
  let computerSelection = getComputerChoice();

  //Comparing the 2 resutls and ubdating the UI
  if (this.id === computerSelection) {
    winner.textContent = "";
    roundResult.textContent = "It's a tie.";
    tie.textContent = tieResult++;
  } else if (
    (this.id === "rock" && computerSelection === "paper") ||
    (this.id === "paper" && computerSelection === "sissores") ||
    (this.id === "sissores" && computerSelection === "rock")
  ) {
    winner.textContent = "";
    roundResult.textContent = `You lose computer picked ${computerSelection} .`;
    computer.textContent = computerResult++;
  } else if (
    (this.id === "paper" && computerSelection === "rock") ||
    (this.id === "sissores" && computerSelection === "paper") ||
    (this.id === "rock" && computerSelection === "sissores")
  ) {
    winner.textContent = "";
    roundResult.textContent = `You win computer picked ${computerSelection} .`;
    you.textContent = youResult++;
  }

  //Announcing the winner based on results
  if (
    Number(you.textContent) +
      Number(computer.textContent) +
      Number(tie.textContent) ===
    5
  ) {
    if (
      Number(you.textContent) > Number(computer.textContent) &&
      Number(you.textContent) >= Number(tie.textContent)
    ) {
      winner.textContent = "Game over : You win.";
      //Resets
      roundResult.textContent = "";
      youResult = 0;
      computerResult = 0;
      tieResult = 0;
    } else if (
      Number(you.textContent) < Number(computer.textContent) &&
      Number(computer.textContent) >= Number(tie.textContent)
    ) {
      winner.textContent = "Game over : You a lose.";
      //Resets
      roundResult.textContent = "";
      youResult = 0;
      computerResult = 0;
      tieResult = 0;
    } else {
      winner.textContent = "Game over : It's a tie. ";
      //Resets
      roundResult.textContent = "";
      youResult = 0;
      computerResult = 0;
      tieResult = 0;
    }
  }
}

//function called game().
//Call the playRound function inside of this one to play a 5 round game
// that keeps score and reports a winner or loser at the end.
// function game() {
//   for (let i = 0; i < 5; i++) {
//     PlayRound(getComputerChoice());
//   }
// }
// game();
