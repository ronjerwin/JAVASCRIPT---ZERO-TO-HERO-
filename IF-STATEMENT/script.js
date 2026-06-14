// WHAT IS IF STATEMENT?
// >> IT IS A CONDITIONAL STATEMENT WHERE EXECUTE SOME CODE IF THE CONDITION IS TRUE.


// EXAMPLE:

const age = 18;

  if(age > 40) {
    console.log("You are TOO OLD, get a license!"); // SINCE AGE = 18 AND THE CONDITION IS > 40 MEANING THE CONDITION IS FALSE, THEN EXECUTE SOME CODE.
  } else if(age >= 18) {
    console.log("Your are qualified to get a license"); // IF STATEMENT HAS AN ELSE IF CLAUSE THAT IF THE FIRST CONDITION IS NOT MET, CHECK THIS CONDITION IF ITS TRUE OR FALSE.
  } else {
    console.log("Your are NOT qualified to get a license"); // IF STATEMENT ALSO HAS A ELSE CLAUSE, THAT EXECUTE A CODE WHEN THE CONDITION IS NOT MET.
  }

  // EXAMPLE 2:

  let personAge = -1;

  if(personAge >= 20) {
    console.log("You're an ADULT!");
  } else if(personAge >= 13 && personAge <= 19) {
    console.log("You're a TEEN!");
  } else if(personAge >= 3 && personAge <= 12) {
    console.log("You're a CHILD!");
  } else if(personAge >= 0 && personAge <= 2) {
    console.log("You're a BABY!");
  } else {
    console.log("INVALID AGE: You must be a GHOST or something else!");
  }


