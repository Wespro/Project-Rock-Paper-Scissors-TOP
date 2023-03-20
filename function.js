function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);
  if (num === 1) {
    console.log("sis");
  } else if (num === 2) {
    console.log("rock");
  } else {
    console.log("paper");
  }
}

getComputerChoice();
