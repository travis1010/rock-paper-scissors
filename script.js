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
      return `You win! ${playerSelection} beats ${computerSelection}`;
    break;
    case 1:
      computerScore++;
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    break;
    case 2:
      return `It's a tie! you both chose ${playerSelection}`;
    break;
  }
}

function game(){
  let round = 1;
  while(playerScore < 3 && computerScore < 3) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Enter your move:").toLowerCase();
    console.log(`Round ${round}:`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`SCORE...Player: ${playerScore}, Computer: ${computerScore}`);
    round++;
  }
  if (playerScore > computerScore) {
    console.log("Congrats! You win!");
  } else {
    console.log("You LOSE!");
  }
  let answer = prompt("Do you want to play again? (yes or no)").toLowerCase();
  if (answer == "yes") {
    playerScore = 0;
    computerScore = 0;
    game();
  } else {
    console.log("goodbye!");
  }
}



game();

