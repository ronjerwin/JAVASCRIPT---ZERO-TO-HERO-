// WHAT IS DATE OBJECTS?
// >> IT IS AN OBJECT THAT CONTAINS A METHOD THAT REPRESENT THE DATE AND TIME.

// YOU CAN AN ARGUMENT DEPENDING TO YOUR NEEDED SPECIFIC DATE.
// >> NUMBER: (YYYY, MM, DD, HH, MM, SS, MM).
// >> STRING: ("YYYY-MM-DDTHH:MM:SS.SSS").

// INITIALIZE A NEW DATE OBJECT SET TO THE CURRENT TIME
const date = new Date();

// SET THE SPECIFIC DATE COMPONENTS
// NOTE: MONTHS ARE ZERO-INDEXED (0 = JAN, 11 = DEC)
date.setFullYear(2024);
date.setMonth(11); // SETS MONTH TO DECEMBER
date.setDate(25);
date.setHours(12);
date.setMinutes(22);
date.setSeconds(21);
date.setMilliseconds(4);

// EXTRACT THE INDIVIDUAL DATE COMPONENTS
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const milliSecond = date.getMilliseconds();

// OUTPUT THE RESULTING MILLISECOND VALUE TO THE CONSOLE
console.log(milliSecond);