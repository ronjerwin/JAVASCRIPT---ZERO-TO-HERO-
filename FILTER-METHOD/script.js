// WHAT IS THE FILTER METHOD?
// >> IT CREATES A NEW ARRAY WITH ALL ELEMENTS THAT PASS A SPECIFIC TEST (CONDITION).
// >> IT DOES NOT CHANGE THE ORIGINAL ARRAY; IT ONLY KEEPS THE ITEMS THAT RETURN 'TRUE'.

const numbers = [1, 5, 3, 6, 12, 45, 2, 41];

// WE ONLY KEEP NUMBERS THAT ARE GREATER THAN OR EQUAL TO 6
const filteredNumber = numbers.filter((element) => {
  return element >= 6;
});

console.log(filteredNumber); // [6, 12, 45, 41]

// WE KEEP ONLY EVEN NUMBERS (DIVISIBLE BY 2)
const evenNums = numbers.filter((element) => {
  return element % 2 === 0;
});

console.log(evenNums); // [6, 12, 2]

// WE KEEP ONLY ODD NUMBERS
const oddNums = numbers.filter((element) => {
  return element % 2 !== 0;
});

console.log(oddNums); // [1, 5, 3, 45, 41]


const strings = ['hello', 'hi', 'goodmorning', 'goodevening'];

// WE KEEP ONLY STRINGS THAT CONTAIN THE LETTER 'o'
const newString = strings.filter((element) => {
  return element.includes('o');
});

console.log(newString); // ['hello', 'goodmorning', 'goodevening']