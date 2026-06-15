// WHAT ARE LOGICAL OPERATORS?
// >> USED TO DETERMINE THE LOGIC BETWEEN VARIABLES OR VALUES.
// >> THEY EVALUATE MULTIPLE CONDITIONS AND RETURN A BOOLEAN (TRUE OR FALSE) BASED ON THE RESULT.
// >> COMMONLY USED IN CONDITIONAL STATEMENTS (IF/ELSE) TO CONTROL THE FLOW OF A PROGRAM.

// KEY LOGICAL OPERATORS:
// 1. AND (&&) - RETURNS TRUE IF BOTH CONDITIONS ARE TRUE.
// 2. OR (||)  - RETURNS TRUE IF AT LEAST ONE CONDITION IS TRUE.
// 3. NOT (!)  - REVERSES THE BOOLEAN VALUE (TRUE BECOMES FALSE, FALSE BECOMES TRUE).

// EXAMPLE:

let age = 17;
let hasLicense = true;

// CHECKING IF AGE IS 18 OR OLDER AND IF THEY HAVE A LICENSE
let canDrive = (age >= 18) && hasLicense ? 'Good Job!' : 'Almost!'; 
console.log(canDrive); // OUTPUT: 'Good Job!'


if(age <= 100 && age >= 18) {
  console.log('You are qualified to get a License');
    if(!hasLicense) {
      console.log('Please get a License.')
    } else {
      console.log('You Have Your License!');
    }
} else {
  console.log('You are NOT qualified to get a License');
}