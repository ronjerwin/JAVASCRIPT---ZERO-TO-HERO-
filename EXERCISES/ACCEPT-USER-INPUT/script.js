// HOW TO ACCEPT USER INPUT?
// >> WE HAVE TWO MAIN WAYS TO ACCEPT USER INPUT:

// 1. EASY WAY
  // const userName = window.prompt('What is your name?');
  // console.log(`Hello, ${userName}!`);


// PROFESSIONAL WAY

  const result = document.getElementById('result');
  const userInput = document.getElementById('inputUserName');

  function handleSubmit() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  
  const hasNumber = numbers.some((number) => userInput.value.includes(number))
    if(hasNumber) {
        console.error('Your name must be a letter');
        alert('Your name must be a letter');
        result.textContent = '';
    } else {
        result.textContent = `Hello, ${userInput.value}`;
      }
      userInput.value = '';
  }

  // NOTE: SOME METHOD IS USED TO CHECK IF AT LEAST ONE ELEMENT OF AN ARRAY ARE INCLUDED, THEN RETURN A BOOLEAN VALUE DEPENDING ON THE CONDITION

