
// EXERCISE 1:

function orderPizza() {
  return new Promise((resolve, reject) => {
    const isPizzaReady = true;
    setTimeout(() => {
      if(isPizzaReady) {
        resolve('Pizza is ready!')
      } else {
        reject('Sorry customer! Pizza is NOT ready.')
      }
    }, 2000)
  })
}

async function preparePizza() {
  try{
  const pizzaOrder = await orderPizza();
  console.log(pizzaOrder);
  }
  catch(error) {
    console.error(error)
  }
}
preparePizza();

// EXERCISE 2:

const users = [{id: 1, name: 'Juan', age: 32},
               {id: 2, name: 'Victor', age: 43},
               {id: 3, name: 'Pedro', age: 36}];

function getUser(id) {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.id === id);
    if(user) {
      resolve(user);
    } else {
      reject('User not found');
    }
  })
}

async function displayUser(id) {
  try {
    const user = await getUser(id);
    console.log(user);
  }
  catch(error) {
    console.error(error);
  }
}
displayUser(2);

// EXERCISE 3:

function step1() {
  return new Promise((resolve, reject) => {
    const isStepCompleted = true;
      setTimeout(() => {
        if(isStepCompleted) {
          resolve('Step 1 Complete');
        } else {
          reject('Step 1 is NOT complete');
        }
      }, 1000);
  })
} 

function step2() {
 return new Promise((resolve, reject) => {
    const isStepCompleted = true;
      setTimeout(() => {
        if(isStepCompleted) {
          resolve('Step 2 Complete');
        } else {
          reject('Step 2 is NOT complete');
        }
      }, 2000);
  })
}

function step3() {
 return new Promise((resolve, reject) => {
    const isStepCompleted = true;
      setTimeout(() => {
        if(isStepCompleted) {
          resolve('Step 3 Complete');
        } else {
          reject('Step 3 is NOT complete');
        }
      }, 3000);
  })
}

async function runAllSteps() {

  try{
    const doStep1 = await step1();
     console.log(doStep1);
    const doStep2 = await step2();
     console.log(doStep2);
    const doStep3 = await step3();
      console.log(doStep3);
  }
  catch(error) {
    console.error(error);
  }
}
runAllSteps();


