// WHAT IS ARROW FUNCTION?
// >> IT IS A CONCISE WAY TO WRITE A FUNCTION EXPRESSION.

// EXAMPLE:
// >> TIMEOUT DELAY IS PLACED AS THE SECOND ARGUMENT OF THE SETTIMEOUT FUNCTION.
setTimeout(() => {
  console.log('Hello');
}, 2000); 

const numbers = [1, 2, 3, 4, 5, 6];

// >> USING IMPLICIT RETURN FOR CLEANER AND SHORT ONE-LINE CODES.
const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums);

// >> REDUCE WITHOUT INITIAL VALUE STORES THE FIRST ELEMENT (1) IN THE ACCUMULATOR.
const multiplyNums = numbers.reduce((accumulator, currentValue) => { return accumulator * currentValue });
console.log(multiplyNums);

// >> CONTINUOUSLY DIVIDES THE ACCUMULATOR BY THE CURRENT ELEMENT FROM LEFT TO RIGHT.
const divideNums = numbers.reduce((accumulator, currentValue) => { return accumulator / currentValue });
console.log(divideNums);

const fruits = ['banana', 'apple', 'orange', 'lemon', 'coconut', 'pomegranate'];

// >> MAP CREATES A NEW ARRAY BY TRANSFORMING EVERY ELEMENT IN THE ORIGINAL ARRAY.
// >> IT CAPITALIZES THE FIRST CHARACTER AND ATTACHES THE REST OF THE STRING.
const pascalFruits = fruits.map((element) => {
  return element.charAt(0).toUpperCase() + element.slice(1);
});
console.log(pascalFruits);

// >> FILTER RETURNS A NEW ARRAY WITH STRINGS THAT HAVE 6 CHARACTERS OR LESS.
const shortWordFruits = fruits.filter((element) => {
  return element.length <= 6;
});
console.log(shortWordFruits);