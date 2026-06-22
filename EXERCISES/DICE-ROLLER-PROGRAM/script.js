const incrementBtn = document.querySelector('.incrementBtn');
const decrementBtn = document.querySelector('.decrementBtn');
const rollBtn = document.getElementById('rollBtn')
const count = document.getElementById('countOfRoll');
const resultContainer = document.getElementById('resultContainer');
  let maxRoll = 6;
  let minRoll = 1;

function CounterProgram() {
  let rollCount = 0;

  function randomizer() { 
    let toHTML = '';
      for(let i = 0; i < rollCount; i++) {
        const random = Math.floor(Math.random() * maxRoll) + minRoll;
        toHTML += `<img class="images" src="dice-images/dice${random}.png" alt="Dice ${random}"/>`;
      }  
      resultContainer.innerHTML = toHTML;
}



  return {
    increment:  () => {
      if(rollCount >= maxRoll) {
        rollCount = minRoll - 1;
      } 
      count.textContent = ++rollCount;
    },
    decrement: () => {
      if(rollCount <= minRoll) {
        rollCount = maxRoll + 1;  
      }
      count.textContent = --rollCount;
    }, randomizer
  }
}

const counter = CounterProgram();

incrementBtn.addEventListener('click', counter.increment);
decrementBtn.addEventListener('click', counter.decrement);

if(rollBtn) {
  rollBtn.addEventListener('click', counter.randomizer);
}
