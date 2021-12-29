let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const POSSIBLE_MOVES = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random()* 3);
  return POSSIBLE_MOVES[randomIndex];
}


function playRound(playerSelection, computerSelection) {
  //array for each choice shows win/loss/tie as index 0/1/2 in array
  const RULE_BOOK = {"rock": ["scissors", "paper", "rock"], "paper": ["rock", "scissors", "paper"], "scissors": ["paper", "rock", "scissors"]};
  switch(RULE_BOOK[playerSelection].indexOf(computerSelection)) {
    case 0:
      playerScore++;
      return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    break;
    case 1:
      computerScore++;
      return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    break;
    case 2:
      return `It's a tie! you both chose ${capitalize(playerSelection)}.`;
    break;
  }
}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

const buttons = document.querySelectorAll('button')

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let playerChoice = btn.value;
    let computerChoice = computerPlay();

    const playerChoiceDiv = document.querySelector('#player-choice');
    const computerChoiceDiv = document.querySelector('#computer-choice');
    playerChoiceDiv.textContent = `${capitalize(playerChoice)}!`;
    computerChoiceDiv.textContent = `${capitalize(computerChoice)}!`;

    let result = playRound(playerChoice, computerChoice);
    const resultDiv = document.querySelector('#results');
    resultDiv.textContent = result;

    const playerScoreboard  = document.querySelector('#player-score');
    playerScoreboard.textContent = `Player: ${playerScore}`

    const computerScoreboard  = document.querySelector('#computer-score');
    computerScoreboard.textContent = `Computer: ${computerScore}`

    if(playerScore == 5) {
      resultDiv.textContent = 'Congrats! You win!'
      playerScore = 0;
      computerScore = 0;
    } else if(computerScore == 5) {
      resultDiv.textContent = 'Sorry! You lose!'
      playerScore = 0;
      computerScore = 0;
    }
  });
});
