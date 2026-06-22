// WHAT IS AN ERROR OBJECT?
// >> IT IS AN OBJECT THAT IS CREATED TO REPRESENT A PROBLEM THAT OCCURS.
// >> IT OCCURS OFTEN WITH USER INPUT OR ESTABLISHING A CONNECTION.

// >> TRY{} : ENCLOSES CODE THAT MIGHT PROTENTIALLY CAUSE AN ERROR.
// >> CATCH() {} : CATCH AND HANDLE ANY THROWN ERRORS FROM TRY{} BLOCK.
// >> FINALLY{} : (OPTIONAL) IT ALWAY EXECUTE SOME CODE. USED MOSTLY FOR CLEAN UP.
// >> EXAMPLE: CLOSE FILES, CLOSE CONNECTIONS, RELEASE RESOURCES


// TRY BLOCK: ENCLOSES CODE THAT MIGHT POTENTIALLY CAUSE AN ERROR
try {
  const dividend = Number(window.prompt('Enter a dividend: '));
  const divisor = Number(window.prompt('Enter a divisor: '));

  // MANUALLY THROWING ERRORS TO HANDLE LOGICAL FAILURES
  if (divisor == 0) {
    throw new Error("You can't enter a zero.");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("You can't enter a non-numeric character.");
  }

  const calculation = dividend / divisor;
  console.log(calculation);
} 
// CATCH BLOCK: CATCH AND HANDLE ANY THROWN ERRORS FROM TRY BLOCK
catch (error) {
  console.error("ERROR ENCOUNTERED: " + error.message);
} 
// FINALLY BLOCK: ALWAYS EXECUTES. USED FOR CLEANUP LIKE CLOSING CONNECTIONS
finally {
  console.log('OPERATION COMPLETED. END.');
}