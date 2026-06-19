
const max = 1000;
const min = 1;


const result = document.querySelector('#result');

function handleRandomNumber() {
  const randomizer = Math.floor(Math.random() * max) + min;
  result.textContent = randomizer;
}