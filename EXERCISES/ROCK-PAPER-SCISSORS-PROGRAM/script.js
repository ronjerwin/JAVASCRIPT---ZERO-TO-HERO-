const playerMove = document.getElementById('playerMove');
const gameResult = document.getElementById('gameResult');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

let userScore = 0;
let enemyScore = 0;
const choices = ['rock', 'paper', 'scissor'];

function handleGame(playerChoice) {
  const computerPick = choices[Math.floor(Math.random() * 3)];
  let result = '';

  switch (true) {
    case playerChoice === computerPick:
      result = 'TIE.';
      break;
    case (playerChoice === 'rock' && computerPick === 'scissor') ||
         (playerChoice === 'paper' && computerPick === 'rock') ||
         (playerChoice === 'scissor' && computerPick === 'paper'):
      result = 'YOU WIN.';
      userScore++;
      break;
    default:
      result = 'YOU LOSE.';
      enemyScore++;
      break;
  }


  playerMove.innerHTML = `<p>PLAYER: ${playerChoice}</p>
                          <p>COMPUTER: ${computerPick}</p>`;
  gameResult.textContent = result;
  playerScore.textContent = `PLAYER SCORE: ${userScore}`;
  computerScore.textContent = `COMPUTER SCORE: ${enemyScore}`;
}