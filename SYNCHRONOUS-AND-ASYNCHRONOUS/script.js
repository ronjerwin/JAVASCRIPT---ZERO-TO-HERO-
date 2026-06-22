// WHAT IS SYNCHRONOUS AND ASYNCHRONOUS?
// >> SYNCHRONOUS: IT EXECUTES A CODE LINE BY LINE CONSECUTIVELY IN A SEQUENTIAL MANNER
// >> CODE THAT WAITS FOR AN OPERATION TO COMPLETE.

// >> ASYNCHRONOUS: IT ALLOWS A MULTIPLE OPERATION TO BE PERFORMED CONCURRENTLY WITHOUT WAITING
// >> DOESN'T BLOCK THE EXECUTION FLOW AND ALLOWS THE PROGRAM TO CONTINUE.

// >> (I/O OPERATIONS, NEWTWORK REQUESTS, FETCHING DATA)
// >> HANDLED WITH: CALLBACKS, PROMISES, ASYNC/AWAIT

// EXAMPLE OF SYNCHRONOUS:

// >> IT EXECUTE LINE BY LINE CONSECUTIVELY.
console.log('Output 1');
console.log('Output 2');
console.log('Output 3');
console.log('Output 4');


// >> EXAMPLE OF ASYNCHRONOUS:

  function asyncFunction() {
    setTimeout(() => console.log('Output 5'), 3000);
  }
  asyncFunction();


// >> TO MAKE THE ASYNCHRONOUS FUNCTION BEHAVE AS IT'S A SYNCHRONOUS, YOU CAN USE CALLBACKS

  asyncFunc(syncFunc);

  function asyncFunc(callback) {
    setTimeout(() => {console.log('Output 6')
                      callback()}, 5000);
  }

  function syncFunc() {
    console.log('Output 7');
    console.log('Output 8');
    console.log('Output 9');
    console.log('Output 10');
  }
