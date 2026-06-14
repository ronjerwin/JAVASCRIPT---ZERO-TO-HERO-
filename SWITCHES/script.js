// WHAT IS A SWITCHES STATEMENT?
// >> SWITCH STATEMENT IS USED AS AN ALTERNATIVE WAY OF WRITING A LONG CHAINS OF IF... ELSE IF STATEMENT.

// EXAMPLE:

// THIS IS A LONG CHAIN IF... ELSE IF STATEMENT

let day = 'tuesday';

if(day === 'sunday') {
  console.log("It's Sunday!");
} else if (day === 'monday') {
  console.log("It's Monday!");
} else if (day === 'tuesday') {
  console.log("It's Tuesday!");
} else if (day === 'wednesday') {
  console.log("It's Wednesday!");
} else if (day === 'thursday') {
  console.log("It's Thursday!");
} else if (day === 'friday') {
  console.log("It's Friday!");
} else if (day === 'saturday') {
  console.log("It's Saturday!");
} else {
  console.log(`${day} is not a day`)
}


// IN SWITCH STATEMENT, THIS IS HOW IT LOOKS:

let dayLabel = 'saturday';

switch(dayLabel) {
  case 'sunday': console.log("It's Sunday!");;
  break;
  case 'monday': console.log("It's Monday!");
  break;
  case 'tuesday': console.log("It's Tuesday!");
  break;
  case 'wednesday': console.log("It's Wednesday!");
  break;
  case 'thursday': console.log("It's Thursday!");
  break;
  case 'friday': console.log("It's Friday!");
  break;
  case 'saturday': console.log("It's Saturday!");
  break;
  default:
  console.log(`${dayLabel} is not a valid day`);
}

// NOTE: SWITCH STATEMENT HAS A BREAK KEYWORD THAT ENDS TO SWITCH STATEMENT IF THE CONDITION IS MET.
// WARNING: IF YOU REMOVE OR DONT ADD BREAK KEYWORD AFTER THE CASE, THE SWTICH STATEMENT CONTINOUSLY RUN EVEN IF THE CONDITION IS MET.

