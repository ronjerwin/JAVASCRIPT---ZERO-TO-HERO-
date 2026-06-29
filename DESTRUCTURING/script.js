// WHAT IS DESTRUCTURING?
// >> IT EXTRACTS VALUES FROM ARRAYS AND OBJECTS, THEN ASSIGNS THEM TO VARIABLES IN A CONVENIENT WAY.

// EXAMPLE 1: SWAPPING VALUES USING DESTRUCTURING ASSIGNMENT
let letter1 = 'A';
let letter2 = 'B';

// WE ARE CREATING A TEMPORARY ARRAY WITH THE VALUES SWAPPED AND THEN ASSIGNING THEM BACK
[ letter1, letter2 ] = [letter2, letter1]; 
console.log(letter1); // 'B'
console.log(letter2); // 'A'

// EXAMPLE 2: SWAPPING ARRAY ELEMENTS BY INDEX
const fruits = ['banana', 'orange', 'apple', 'lemon', 'grapes'];
// DIRECTLY TARGETING THE INDICES 0 AND 1 TO SWAP THEIR POSITIONS
[ fruits[0], fruits[1] ] = [fruits[1], fruits[0]];
console.log(fruits); // ['orange', 'banana', 'apple', 'lemon', 'grapes']

// EXAMPLE 3: UNPACKING ARRAY VALUES INTO VARIABLES
const person = [ 'Alex', 'Santos', 23 ];
// THE ORDER MATTERS HERE: THE VARIABLES ARE MAPPED TO THE INDEX OF THE ARRAY
const [ firstname, lastname, age ] = person;
console.log(firstname); // 'Alex'
console.log(lastname);  // 'Santos'
console.log(age);       // 23

// EXAMPLE 4: UNPACKING OBJECT PROPERTIES INTO VARIABLES
const address = {
  street: 'Mabuhay Street',
  barangay: 'Barangay 143',
  city: 'Baliwag',
  province: 'Bulacan'
}

// WE EXTRACT PROPERTIES BY MATCHING THE KEYS (PROPERTY NAMES) INSTEAD OF POSITIONS
const { street, barangay, city, province } = address;
console.log(street);
console.log(barangay);
console.log(city);
console.log(province);

// EXAMPLE 5: DESTRUCTURING DIRECTLY IN FUNCTION PARAMETERS
stateAddress(address);

// WE "DESTRUCTURE" THE OBJECT IMMEDIATELY IN THE PARAMETER LIST TO ACCESS PROPERTIES DIRECTLY
// ADDING DEFAULT VALUE AND = {} AT THE END PREVENTS ERRORS IF NO PROPERT OR OBJECT IS PASSED AT ALL
function stateAddress({ street, barangay, city, province="unknown" } = {}) { 
  console.log(`${street}, ${barangay}, ${city}, ${province}.`);
}



const arrays = ['Spongebob', 'Squarepants', '35', 'Conch Street'];

function stateInfo([ firstname, lastname, age, street ] = []) {
  console.log(`My name is ${firstname} ${lastname}.`);
  console.log(`My age is ${age}.`);
  console.log(`I'm from ${street}.`);
}

stateInfo(arrays);



const products = {
  name: "Mechanical Keyboard",
  price: 89.50,
  inStock: true,
  categories: ["Electronics", "Gaming"]
}

function stateProductInfo({ name, price, categories } = {}) {
  console.log(`Product Name: ${name}`);
  console.log(`Price: ${price}`);
  console.log(`Categories: ${categories.join(', ')}`);
}

stateProductInfo(products);

const arrays2 = ['Spongebob', 'Squarepants', '35', 'Conch Street'];
const [...elements] = arrays2;

console.log(elements);

const arrays3 = ['Spongebob', 'Squarepants', '35', 'Conch Street'];

   [arrays3[0], arrays3[2]] = [arrays3[2], arrays3[0]];

   console.log(arrays3)