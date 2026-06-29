// FUNCTION DECLARATION: DEFINES A REUSABLE BLOCK OF CODE.
// >> THIS FORMAT IS HOISTED, MEANING THE FUNCTION IS ACCESSIBLE THROUGHOUT 
// >> THE SCOPE EVEN IF CALLED BEFORE THE ACTUAL DEFINITION LINE.
sayHello('RJ'); 

function sayHello(name) {
  console.log(`Hello, ${name}`);
}

// FUNCTION EXPRESSION: STORES A FUNCTION AS A VALUE WITHIN A VARIABLE.
// >> UNLIKE DECLARATIONS, EXPRESSIONS ARE NOT HOISTED. THE VARIABLE MUST 
// >> BE DEFINED BEFORE YOU ATTEMPT TO CALL THE FUNCTION.
const sayGoodBye = function() {
  console.log('GoodBye!');
}
sayGoodBye();

const numbers = [1, 2, 3, 4, 5, 6];

// FILTERING ARRAY: CREATES A NEW ARRAY BASED ON A CONDITIONAL TEST.
// >> THIS EXPRESSION USES A CALLBACK FUNCTION TO CHECK FOR REMAINDERS 
// >> AND ISOLATE ODD NUMBERS.
const oddNums = numbers.filter((element) => {
    return element % 2 !== 0;
});
console.log(oddNums);

// FILTERING ARRAY: CHECKS FOR ZERO REMAINDER TO ISOLATE EVEN NUMBERS.
// >> THIS EXPRESSION USES A CALLBACK FUNCTION TO IDENTIFY EVEN VALUES.
const evenNums = numbers.filter((element) => {
    return element % 2 === 0;
});
console.log(evenNums);

// REDUCE: AGGREGATES ARRAY ELEMENTS INTO A SINGLE ACCUMULATED VALUE.
// >> THE SECOND ARGUMENT (0) SETS THE INITIAL STARTING POINT FOR THE SUM.
const total = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(total);



greetUser1();

function greetUser1(username = 'Guest') {
  console.log(`Welcome back, ${username}!`);
}

const greetUser2 = (username = 'Guest') => {
  console.log(`Welcome back, ${username}!`);
}

greetUser2('Spongebob');


const username = document.getElementById('username');
const handleSubmit = document.getElementById('handleSubmit');
const result = document.getElementById('result');

handleSubmit.addEventListener('click', function() {
  try {
    if(username.value === "") {
      throw new Error('Username cannot be an empty string!');
    }else {
      result.textContent = `Hello, ${username.value}!`;
      username.value = '';
    }
  }
  catch(error) {
    console.error(error);
  }
})
