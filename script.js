// Computer's Selection
const rock = 1;
const paper = 2;
const scissor = 3;

//
//
let humanScore = 0;
let computerScore = 0;
//
//

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
  return prompt("Please type Rock, Paper, or Scissor:");
}

function playRound() {
  let computerChoice = getComputerChoice();
  let userInput = getHumanChoice();
  let humanChoice = userInput.toLowerCase().trim();
  if (
    humanChoice != "rock" &&
    humanChoice != "paper" &&
    humanChoice != "scissor"
  ) {
    return "Invalid input. Please type Rock, paper or scissor";
  }
  if (computerChoice === paper && humanChoice === "rock") {
    computerScore = computerScore + 1;
    return "Computer Wins. Paper beats rock.";
  } else if (computerChoice === paper && humanChoice === "scissor") {
    humanScore = humanScore + 1;
    return "You win. Scissor beats paper.";
  } else if (computerChoice === rock && humanChoice === "paper") {
    humanScore = humanScore + 1;
    return "You win. Paper beats rock.";
  } else if (computerChoice === rock && humanChoice === "scissor") {
    computerScore = computerScore + 1;
    return "Computer Wins. Rock beats scissor.";
  } else if (computerChoice === scissor && humanChoice === "rock") {
    humanScore = humanScore + 1;
    return "You win. Rock beats scissor.";
  } else if (computerChoice === scissor && humanChoice === "paper") {
    computerScore = computerScore + 1;
    return "Computer Wins. Scissor beats paper.";
  } else {
    return `It's a draw. you both selected ${humanChoice}.`;
  }
}

//
//
//
function start() {
  console.log(playRound());
  console.log(`Computer: ${computerScore} | Human: ${humanScore}`);
}

for (let i = 0; i < 5; i++) {
  start();
}
