// CLOSURE
// >> IT IS A FUNCTION DEFINED INSIDE OF ANOTHER FUNCTION.
// >> THE INNER FUNCTION HAS AN ACCESS TO THE VARIABLE AND SCOPE OF THE OUTER FUNCTION.
// >> IT IS USED TO ENCAPSULATE AND CONTROL ACCESS OF OUTER FUNCTION BY MAKING AN INNER FUNCTION TO MAKE THE VARIABLE OF THE OUTER FUNCTION PRIVATE.

// EXAMPLE 1: BASIC COUNTER
function handleCount() {
  // THIS VARIABLE IS PRIVATE AND ENCAPSULATED WITHIN THE CLOSURE
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`)
  }

  function decrement() {
    count--;
    console.log(`Count decreased to ${count}`)
  }

  // WE RETURN AN OBJECT TO EXPOSE ONLY SPECIFIC METHODS
  return {increment, decrement}
}

const counter = handleCount();

counter.increment();
counter.increment();
counter.decrement();
counter.decrement();


// EXAMPLE 2: GAME POINTS SYSTEM
function addGame() {
  // THIS VARIABLE REMAINS PERSISTENT AND HIDDEN FROM THE GLOBAL SCOPE
  let count = 0;

  function addPoints(point) {
    count += point;
    console.log(`+${point}pts.`)
  }

  function minusPoints(point) {
    count -= point;
    console.log(`-${point}pts.`)
  }

  function getPoints() {
    // THIS FUNCTION PROVIDES A "READ-ONLY" GATEWAY TO THE PRIVATE VARIABLE
    return count;
  }

  // RETURNING THE METHODS ALLOWS US TO INTERACT WITH PRIVATE DATA SAFELY
  return {addPoints, minusPoints, getPoints}
}

const game = addGame();

game.addPoints(1);
game.addPoints(5);
game.minusPoints(1);

// ACCESSING THE ENCAPSULATED DATA VIA OUR DEFINED INTERFACE
console.log(game.getPoints());