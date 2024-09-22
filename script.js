// Computer's Selection
const rock = 1;
const paper = 2;
const scissor = 3;

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}
let computerChoice = getComputerChoice();

function getHumanChoice() {
  return prompt("Please type Rock, Paper, or Scissor:");
}
let userInput = getHumanChoice();
let humanChoice = userInput.toLowerCase().trim();

function result() {
  if (
    humanChoice != "rock" &&
    humanChoice != "paper" &&
    humanChoice != "scissor"
  ) {
    return "Invalid input. Please type Rock, paper or scissor";
  }
  if (computerChoice === paper && humanChoice === "rock") {
    return "Computer Wins. Paper beats rock.";
  } else if (computerChoice === paper && humanChoice === "scissor") {
    return "You win. Scissor beats paper.";
  } else if (computerChoice === rock && humanChoice === "paper") {
    return "You win. Paper beats rock.";
  } else if (computerChoice === rock && humanChoice === "scissor") {
    return "Computer Wins. Rock beats scissor.";
  } else if (computerChoice === scissor && humanChoice === "rock") {
    return "You win. Rock beats scissor.";
  } else if (computerChoice === scissor && humanChoice === "paper") {
    return "Computer Wins. Scissor beats paper.";
  } else {
    return `It's a draw. you both selected ${humanChoice}.`;
  }
}

//
//
//
let humanScore = 0;
let computerScore = 0;
