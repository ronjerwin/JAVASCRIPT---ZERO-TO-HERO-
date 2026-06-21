// SETTIMEOUT FUNCTION
// >> IT IS A BUILT-IN FUNCTION THAT EXECUTES A CODE OR FUNCTION AFTER A SPECIFIED DELAY (IN MILLISECONDS).
// >> IT RETURNS A UNIQUE ID THAT CAN BE USED TO CANCEL THE TIMER BEFORE IT EXECUTES.

// EXAMPLE 1:

let timeOutId;

function handleClick() {
  // SETTIMEOUT SCHEDULES THE CALLBACK FUNCTION TO RUN AFTER 3000MS (3 SECONDS)
  // THE RETURNED ID IS STORED TO ALLOW US TO CANCEL IT LATER IF NEEDED
  timeOutId = setTimeout(() => alert('Hello'), 3000);
};

function handleCancel() {
  // CLEARTIMEOUT USES THE STORED ID TO STOP THE SCHEDULED FUNCTION FROM RUNNING
  clearTimeout(timeOutId);
}  



// EXAMPLE 2:

// THIS FUNCTION ACTS AS A FACTORY TO CREATE A PRIVATE TIMER SCOPE
function handleTimer() {
  // THIS VARIABLE IS ENCAPSULATED; IT CANNOT BE ACCESSED FROM OUTSIDE
  let timeOutId;

  return {
    // START METHOD: RESETS ANY EXISTING TIMER AND STARTS A NEW ONE
    start: () => {
      clearTimeout(timeOutId); // PREVENTS MULTIPLE TIMERS FROM RUNNING AT ONCE
      timeOutId = setTimeout(() => alert('Hello'), 3000);
    },
    // CANCEL METHOD: CLEARS THE CURRENT TIMER USING THE PRIVATE ID
    cancel: () => {
      clearTimeout(timeOutId);
    }
  }
}

// INITIALIZE THE CLOSURE OBJECT
const timer = handleTimer();

// ATTACH THE START METHOD TO THE START BUTTON
document.getElementById('startTimer').addEventListener('click', () => {
  timer.start();
});

// ATTACH THE CANCEL METHOD TO THE CANCEL BUTTON
document.getElementById('cancelTimer').addEventListener('click', () => {
  timer.cancel();
});