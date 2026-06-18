// WHAT IS AN ARRAY OF OBJECTS?
// >> IT IS A COLLECTION WHERE EACH ELEMENT IS AN OBJECT.
const fruits = [
                {name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}
];

// 1. forEach: EXECUTES A FUNCTION FOR EVERY ELEMENT IN THE ARRAY
// USED FOR SIDE EFFECTS LIKE LOGGING, NOT FOR CREATING NEW ARRAYS.
fruits.forEach((fruit) => {
  console.log(fruit.name);
});

// 2. map: CREATES A NEW ARRAY BY TRANSFORMING EACH ELEMENT
// HERE WE TAKE THE NAME, UPPERCASE THE FIRST LETTER, AND APPEND THE REST.
const pascalName = fruits.map((fruit) => {
  return fruit.name.charAt(0).toUpperCase() + fruit.name.slice(1);
});
console.log(pascalName);

// 3. filter: CREATES A NEW ARRAY CONTAINING ONLY ELEMENTS THAT PASS THE TEST
// WE ONLY KEEP FRUITS WHERE THE CALORIES PROPERTY IS LESS THAN 100.
const lowCalFruits = fruits.filter((fruit) => {
  return fruit.calories < 100;
});
console.log(lowCalFruits);

// 4. reduce (SUMMATION): CONDENSES THE ARRAY INTO A SINGLE NUMBER
// WE START WITH AN INITIAL VALUE OF 0 AND ADD EACH FRUIT'S CALORIES TO THE ACCUMULATOR.
const gainedCalories = fruits.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.calories;
}, 0);
console.log(gainedCalories);

// 5. reduce (FIND MAXIMUM): CONDENSES THE ARRAY INTO A SINGLE OBJECT
// WE COMPARE THE CURRENT CHAMPION (ACCUMULATOR) TO THE NEXT FRUIT.
// IF THE NEXT FRUIT HAS MORE CALORIES, IT BECOMES THE NEW ACCUMULATOR.
const maxCalFruits = fruits.reduce((accumulator, currentValue) => {
  return accumulator.calories > currentValue.calories ? accumulator : currentValue;
});
console.log(maxCalFruits);