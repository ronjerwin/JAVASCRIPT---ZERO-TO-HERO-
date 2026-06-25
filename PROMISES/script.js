// WHAT IS A PROMISES?
// >> AN OBJECT THAT MANAGES ASYNCHRONOUS OPERATIONS.
// >> WRAP A PROMISE OBJECT AROUND {ASYNCHRONOUS CODE} "I PROMISE TO RETURN A VALUE"
// >> PENDING ->> RESILVED ->> REJECTED
// >> SYNTAX: new Promise((resolve, reject) => {asynchronous code});


function cleanKitchen() {

  return new Promise((resolve, reject) => {
    const isKitchenCleand = true;
    setTimeout(() => {
      if(isKitchenCleand) {
          resolve('You clean the kitchen!');  
      } else {
          reject("You DIDN'T clean the kitchen!");
      }
    }, 2000)
  })
}

function practiceCoding() {

  return new Promise((resolve, reject) => {
    const isPracticing = false;
    setTimeout(() => {
      if(isPracticing) {
        resolve('You practice coding!');
      } else {
        reject("You DIDN'T practice coding!");
      }
    }, 3000)
  })

}

function doLaundry() {
  
  return new Promise((resolve, reject) => {
    const isDoingLaundy = true;
    setTimeout(() => {
      if(isDoingLaundy) {
        resolve('You do laundry!');
      } else {
        reject("You DIDN'T do the laundry!");
      }
    }, 1000)
  })
}

cleanKitchen().then(value => {console.log(value); return practiceCoding();})
              .then(value => {console.log(value); return doLaundry();})
              .then(value => {console.log(value); console.log('You Complete the Tasks!')})
              .catch(error => console.error(error));


