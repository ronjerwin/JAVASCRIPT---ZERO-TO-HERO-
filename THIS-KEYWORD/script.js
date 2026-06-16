// WHAT IS THIS KEYWORD?
// >> 'THIS' IS USED AS A REFERENCE TO THE OBJECT NAME.
// >> 'THIS' IS A REFERENCE TO THE OBJECT THAT IS CURRENTLY EXECUTING THE CODE.
// >> IT ALLOWS THE METHOD TO ACCESS THE PROPERTIES OF THE OBJECT IT BELONGS TO.


// EXAMPLE

const person1 = {
  firstName: 'Spongebob',
  lastName: 'SquarePants',
  age: 35,
  isEmployed: true,
  sayHello: function() {console.log(`Hello, ${this.firstName}`)}
}

person1.sayHello(); // >> OUTPUT: 'Hello, Spongebob'

const person2 = {
  firstName: 'Patrick',
  sayHello: person1.sayHello // >> REUSING THE SAME FUNCTION
}

person2.sayHello(); // >> OUTPUT: 'Hello, Patrick'
