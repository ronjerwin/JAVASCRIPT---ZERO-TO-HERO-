const max = 100;
const min = 1;
const randomizer = Math.floor(Math.random() * (max - min + 1)) + min;
let userInput;

do {
  const input = window.prompt('Pick a number from 1-100');
  
  // Handle "Cancel" button
  if (input === 'null') {
    alert('Game exited.');
    break;
  }

  userInput = Number(input);

  // Validate if input is a number
  if (isNaN(userInput)) {
    alert('That is not a valid number. Please try again.');
  } else if (userInput < randomizer) {
    alert('Too Low, Please try again!');
  } else if (userInput > randomizer) {
    alert('Too High, Please try again!');
  } else {
    alert('Congrats! You guessed the number.');
  }

} while (userInput !== randomizer);