// overall Scores
let computerOverallScore = 0;
let userOverallScore = 0;

//  Selection values
const rock = 1;
const paper = 2;
const scissor = 3;
//
// current selection
let userChoice = null;
let computerChoice = null;
// user's selection
const rockSelection = document.querySelector('.rockSelection');
const paperSelection = document.querySelector('.paperSelection');
const scissorSelection = document.querySelector('.scissorSelection');
//

const getUserCurrentSelection = document.querySelector('.yourselection');
//
rockSelection.addEventListener('click', rockSelected);

function rockSelected() {
  getUserCurrentSelection.textContent = '';
  const rockClicked = document.createElement('p');
  rockClicked.textContent = 'rock';
  rockClicked.classList.add('rock');
  getUserCurrentSelection.appendChild(rockClicked);
  userChoice = rock;
  computerSelection();
  playEachRound();
}

paperSelection.addEventListener('click', paperSelected);

function paperSelected() {
  getUserCurrentSelection.textContent = '';
  const paperClicked = document.createElement('p');
  paperClicked.textContent = 'paper';
  paperClicked.classList.add('paper');
  getUserCurrentSelection.appendChild(paperClicked);
  userChoice = paper;
  computerSelection();
  playEachRound();
}

scissorSelection.addEventListener('click', scissorSelected);

function scissorSelected() {
  getUserCurrentSelection.textContent = '';
  const scissorClicked = document.createElement('p');
  scissorClicked.textContent = 'scissor';
  scissorClicked.classList.add('scissor');
  getUserCurrentSelection.appendChild(scissorClicked);
  userChoice = scissor;
  computerSelection();
  playEachRound();
}

//
//
const getComputerCurrentSelection =
  document.querySelector('.computerSelection');

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function computerSelection() {
  const choosenValue = getComputerChoice();
  if (choosenValue === 1) {
    getComputerCurrentSelection.textContent = '';
    const rockChoosen = document.createElement('p');
    rockChoosen.textContent = 'rock';
    rockChoosen.classList.add('rock');
    getComputerCurrentSelection.appendChild(rockChoosen);
    computerChoice = rock;
  } else if (choosenValue === 2) {
    getComputerCurrentSelection.textContent = '';
    const paperChoosen = document.createElement('p');
    paperChoosen.textContent = 'paper';
    paperChoosen.classList.add('paper');
    getComputerCurrentSelection.appendChild(paperChoosen);
    computerChoice = paper;
  } else {
    getComputerCurrentSelection.textContent = '';
    const scissorChoosen = document.createElement('p');
    scissorChoosen.textContent = 'scissor';
    scissorChoosen.classList.add('scissor');
    getComputerCurrentSelection.appendChild(scissorChoosen);
    computerChoice = scissor;
  }
}
//
//
//
const currentResultMessage = document.querySelector('.currentResultMessage');

function playEachRound() {
  if (computerChoice === userChoice) {
    currentResultMessage.textContent = '';
    const message = document.createElement('h1');
    message.textContent = "Hmm... It's a Draw.!";
    message.classList.add('draw');

    currentResultMessage.appendChild(message);
  } else if (computerChoice === rock && userChoice === paper) {
    currentResultMessage.textContent = '';
    const message = document.createElement('h1');
    message.textContent = 'Yay! You Win!';
    message.classList.add('win');
    userOverallScore++;
    currentResultMessage.appendChild(message);
  } else if (computerChoice === rock && userChoice === scissor) {
    currentResultMessage.textContent = '';
    const message = document.createElement('h1');
    message.textContent = 'Oh No! You Lost!';
    message.classList.add('lost');
    computerOverallScore++;
    currentResultMessage.appendChild(message);
  } else if (computerChoice === paper && userChoice === rock) {
    currentResultMessage.textContent = '';
    const message = document.createElement('h1');
    message.textContent = 'Oh No! You Lost!';
    message.classList.add('lost');
    computerOverallScore++;
    currentResultMessage.appendChild(message);
  } else if (computerChoice === paper && userChoice === scissor) {
    currentResultMessage.textContent = '';
    const message = document.createElement('h1');
    message.textContent = 'Yay! You Win!';
    message.classList.add('win');
    userOverallScore++;
    currentResultMessage.appendChild(message);
  } else if (computerChoice === scissor && userChoice === rock) {
    currentResultMessage.textContent = '';
    const message = document.createElement('h1');
    message.textContent = 'Yay! You Win!';
    message.classList.add('win');
    userOverallScore++;
    currentResultMessage.appendChild(message);
  } else if (computerChoice === scissor && userChoice === paper) {
    currentResultMessage.textContent = '';
    const message = document.createElement('h1');
    message.textContent = 'Oh No! You Lost!';
    message.classList.add('lost');
    computerOverallScore++;
    currentResultMessage.appendChild(message);
  }
  // Overall Score Stat
  document.querySelector(
    '.computer'
  ).textContent = `Computer: ${computerOverallScore}`;
  document.querySelector('.human').textContent = `You: ${userOverallScore}`;
  document.querySelector('.winrate').textContent = `Your current win rate is %`;
}
//
