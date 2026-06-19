

const result = document.querySelector('#result');
let count = 0;

function handleDecrement() {
  result.textContent = count--;
}

function handleIncrement() {
  result.textContent = count++;
}

function handleReset() {
  result.textContent = count = 0;
}