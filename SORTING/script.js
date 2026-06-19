// WHAT IS SORTING?
// >> IT IS A METHOD USED TO SORT AN ELEMENTS OF AN ARRAY.
// >> BY DEFAULT, IT SORTS AS STRINGS (LEXICOGRAPHICAL ORDER).

// EXAMPLE 1: SORTING STRINGS
const fruits = ['banana', 'orange', 'apple', 'coconut'];
// USE SORT() FOR STRINGS
fruits.sort(); 
console.log("SORTED FRUITS:", fruits);

// EXAMPLE 2: SORTING NUMBERS
const numbers = [1, 10, 9, 6, 4, 7, 2, 8, 3];
// USE COMPARE FUNCTION FOR NUMBERS (ASCENDING)
numbers.sort((a, b) => a - b); 
console.log("SORTED NUMBERS:", numbers);

// EXAMPLE 3: SORTING OBJECTS
const persons = [
    { name: 'spongebob', age: 30, height: 140 },
    { name: 'squidward', age: 35, height: 120 },
    { name: 'patrick', age: 32, height: 160 }
];

// 1. SORT BY AGE (ASCENDING)
// WE USE [...ARRAY] TO COPY SO WE DO NOT CHANGE THE ORIGINAL
const sortedByAge = [...persons].sort((a, b) => a.age - b.age);

// 2. SORT BY NAME (ALPHABETICAL)
// WE USE TOSORTED() TO EASILY CREATE A NEW SORTED ARRAY
const sortedByName = persons.toSorted((a, b) => a.name.localeCompare(b.name));

console.log("ORIGINAL LIST:", persons);
console.log("SORTED BY AGE:", sortedByAge);
console.log("SORTED BY NAME:", sortedByName);