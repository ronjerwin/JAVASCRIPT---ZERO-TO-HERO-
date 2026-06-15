// WHAT IS .forEach()?
// >> A METHOD THAT GOES THROUGH EVERY ITEM IN AN ARRAY AND RUNS A FUNCTION FOR EACH ONE.

// FORMAT: array.forEach((element, index, array) => { ... })


const numbers = [1, 4, 9, 16];

// WE USE forEach TO RUN A FUNCTION ON EVERY NUMBER
numbers.forEach(calculateSquare);
numbers.forEach(displayValue);

// THIS FUNCTION CHANGES THE NUMBER TO ITS SQUARE ROOT
function calculateSquare(element, index, array) {
    // WE UPDATE THE ORIGINAL ARRAY USING ITS INDEX
    array[index] = Math.sqrt(element);
}

// THIS FUNCTION JUST PRINTS THE VALUE
function displayValue(element) {
    console.log(element);
}


const fruits = ['banana', 'orange', 'apple'];

// WE CAN PASS FUNCTIONS TO forEach TO MODIFY OR SHOW THE ARRAY
fruits.forEach(makeUpperCase);
fruits.forEach(displayValue);

function makeUpperCase(element, index, array) {
    // CHANGE CURRENT ITEM TO UPPERCASE
    array[index] = element.toUpperCase();
}


const vegetables = ['eggplant', 'bittermelon', 'pumpkin'];

// YOU CAN ALSO WRITE THE FUNCTION DIRECTLY INSIDE THE forEach (ANONYMOUS FUNCTION)
// THIS IS VERY COMMON WHEN YOU DON'T NEED TO REUSE THE FUNCTION ELSEWHERE
vegetables.forEach((element, index, array) => {
    // CAPITALIZE THE FIRST LETTER AND ADD THE REST OF THE WORD
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
});

console.log(vegetables); // RESULT: ['Eggplant', 'Bittermelon', 'Pumpkin']