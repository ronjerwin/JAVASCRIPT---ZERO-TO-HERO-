// WHAT IS THE MAP METHOD?
// >> IT CREATES A NEW ARRAY BY APPLYING A FUNCTION TO EVERY ITEM IN THE ORIGINAL ARRAY.
// >> IT DOES NOT CHANGE THE ORIGINAL ARRAY; IT JUST GIVES YOU A NEW, TRANSFORMED ONE.

const fruits = ['banana', 'apple', 'orange', 'coconut'];

// .map() GOES THROUGH EACH FRUIT, RUNS THE 'pascal' FUNCTION, 
// AND SAVES THE RESULTS INTO A NEW ARRAY.
const pascalFruits = fruits.map(pascal);
console.log(pascalFruits); // ['Banana', 'Apple', 'Orange', 'Coconut']

function pascal(element) {
    // THIS TURNS THE FIRST LETTER INTO CAPITAL AND ADDS THE REST OF THE WORD
    return element.charAt(0).toUpperCase() + element.slice(1);
}


const dates = ['2025-04-23', '2026-05-12', '2023-01-24'];

// .map() TRANSFORMS EACH DATE FORMAT AND STORES IT IN A NEW ARRAY
const formattedDates = dates.map(formatDates);
console.log(formattedDates); // ['04-23-2025', '05-12-2026', '01-24-2023']

function formatDates(element) {
    // SPLIT THE DATE BY THE DASH AND REARRANGE THE PARTS
    const part = element.split('-');
    return `${part[1]}-${part[2]}-${part[0]}`;
}

// SAME OUTPUT LIKE THE FORMATDATES FUNCTION.
const formatted = dates.map((element) => {
    const part = element.split('-');
    return `${part[1]}-${part[2]}-${part[0]}`;
})
