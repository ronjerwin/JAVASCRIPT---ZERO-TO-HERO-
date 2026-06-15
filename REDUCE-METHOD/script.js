// WHAT IS REDUCE METHOD?
// >> IT IS USED TO GET EACH ELEMENT OF AN ARRAY AND REDUCE IT IN A SINGLE VALUE.
// >> IT HAS TWO PARAMETERS:
// 1.) ACCUMULATOR - IT IS THE CONTAINER THAT STARTS IN 0 AND EVERY VALUE OR CURRENT THAT IS RETURN WILL BE STORE AS ITS VALUE.
// 2.) CURRENTVALUE - THIS STORES THE ELEMENTS OF AN ARRAY STARTING TO THE FIRST ELEMENT TO LAST ELEMENT


// EXAMPLE:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// NOTE: IN THE EXAMPLE THE FIRST VALUE OF THE ACCUMULATOR IS 0, AND THE CURRENTVALUE IS 1. AFTER THE RETURN 1 WILL BE THE VALUE OF THE ACCUMULATOR AND THE NEXT VALUE OF THE CURRENTVALUE WILL BE 2, THEN ADDS THE 2 IN THE ACCUMULATOR THAT HAS A VALUE OF 1, SO THE VALUE OF ACCUMULATOR WILL BE 3. NOW THE VABLUE OF CURRENT VALUE IS 3. AND SO ON...

const newNumber = numbers.reduce((accumulator, currentValue) => {
  return accumulator, currentValue = accumulator + currentValue + 0;
})

console.log(newNumber)

const grades = [90, 94, 87, 85, 92];

const highestGrade = grades.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
})

console.log(highestGrade);

const lowestGrade = grades.reduce((accumulator, currentValue) => {
  return Math.min(accumulator, currentValue);
})

console.log(lowestGrade);


