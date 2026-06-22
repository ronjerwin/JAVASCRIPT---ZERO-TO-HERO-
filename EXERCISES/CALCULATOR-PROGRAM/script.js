const display = document.getElementById('display');


function handleInput(event) {
  display.value += event;
}

function handleCalculation() {
  try {
    display.value = eval(display.value);
  }
  catch(error) {
    display.value = 'Error';
    console.error("CALCULATION ERROR: " + error.message);
  }
}
function handleClear() {
  display.value = '';
}




