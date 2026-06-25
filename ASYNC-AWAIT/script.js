// WHAT IS ASYNC/AWAIT?
// >> ASYNC: MAKES A FUNCTION RETURN A PROMISE
// >> IT IS USED ONLY IF THE FUNCTION RETURNS A PROMISE.

// >> AWAIT: MAKES AN ASYNC FUNCTION WAIT FOR A PROMISE
// >> IT ONLY WORKS OF THE FUNCTION HAS AN ASYNC

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

async function doChores() {

  try {
  const cleanTheKitchen = await cleanKitchen();
  
  console.log(cleanTheKitchen);
  const practicingCoding = await practiceCoding();
    console.log(practicingCoding);
  const doingLaundry = await doLaundry();
    console.log(doingLaundry);
  }
  catch(error) {
    console.error(error)
  }
  finally {
    console.log('End!')
  }
}

doChores();


