const userInput = document.getElementById('userInput');
const toCelsius = document.getElementById('celsius');
const toFahrenheit = document.getElementById('fahrenheit');
const result = document.getElementById('result');
let celsius;
let fahrenheit;

function handleSubmit() {
  let input = Number(userInput.value);
  if(toCelsius.checked) {
    celsius = ((input - 32) * 5/9).toFixed(2);
    result.textContent = celsius;
  } else if(toFahrenheit.checked) {
    fahrenheit = ((input * 9/5) + 32).toFixed(2);
    result.textContent = fahrenheit;
  }
}