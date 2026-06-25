// WHAT IS A CALLBACK HELL? (PYRAMID OF DOOM)
// >> IT IS A SITUATION WHERE CALLBACKS ARE NESTED WITHIN OTHER CALLBACKS TO THE DEGREE WHERE THE CODE IS DIFFICULT TO READ.
// >> IT IS THE OLD PATERN TO HANDLE ASYNCHRONOUS FUNCTIONS.
// >> USE PROMISES + ASYN/AWAIT TO AVOID CALLBACK HELL



function task1(callback) {
  setTimeout(() => {
    console.log('TASK 1');
    callback();
  }, 3000);
}

function task2(callback) {
  setTimeout(() => {
    console.log('TASK 2');
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log('TASK 3');
    callback();
  }, 4000);
}

function task4() {
  setTimeout(() => {
    console.log('TASK 4');
  }, 1500);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => console.log('All Task Complete!'));
    })
  })
})

