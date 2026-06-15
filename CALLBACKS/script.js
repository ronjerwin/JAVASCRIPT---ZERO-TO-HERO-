// WHAT IS A CALLBACK?
// >> A FUNCTION PASSED INTO ANOTHER FUNCTION AS AN ARGUMENT. 
// >> THE FIRST FUNCTION WILL "CALL IT BACK" (EXECUTE IT) ONCE IT FINISHES ITS OWN TASK.
// >> THIS IS VERY USEFUL FOR TASKS WITH A DELAY, LIKE WAITING FOR DATA OR TIMERS.

// EXAMPLE:
function sayHello(callback) {
    // PRETEND WE ARE WAITING FOR 2 SECONDS
    setTimeout(() => {
        console.log('HELLO!');
        // NOW THAT THE TASK IS DONE, WE RUN THE CALLBACK FUNCTION
        callback(); 
    }, 2000);
}

function sayGoodBye() {
    console.log('GOOD BYE!');
}

// WE PASS 'sayGoodBye' AS AN ARGUMENT TO 'sayHello'
sayHello(sayGoodBye);