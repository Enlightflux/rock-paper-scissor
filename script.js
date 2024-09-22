// Computer's Selection
const rock = 1;
const paper = 2;
const scissor = 3;

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}
let computerChoice = getComputerChoice();

function getHumanChoice() {
  return prompt();
}
let userInput = getHumanChoice();
let humanChoice = userInput.toLowerCase();

function result() {
  if (
    humanChoice != "rock" &&
    humanChoice != "paper" &&
    humanChoice != "scissor"
  ) {
    return "Invalid input. Please type Rock, paper or scissor";
  }
  if (computerChoice === 2 && humanChoice === "rock") {
    return "Computer Wins. Paper beats rock.";
  } else if (computerChoice === 2 && humanChoice === "scissor") {
    return "You win. Scissor beats rock.";
  } else if (computerChoice === 1 && humanChoice === "paper") {
    return "You win. Paper beats rock.";
  } else if (computerChoice === 1 && humanChoice === "Scissor") {
    return "Computer Wins. Rock beats scissor.";
  } else if (computerChoice === 3 && humanChoice === "rock") {
    return "You win. Rock beats scissor.";
  } else if (computerChoice === 3 && humanChoice === "Paper") {
    return "Computer Wins. Scissor beats paper.";
  } else {
    return `It's a draw. you both selected ${humanChoice}.`;
  }
}

console.log(result());
//
//
//
let humanScore = 0;
