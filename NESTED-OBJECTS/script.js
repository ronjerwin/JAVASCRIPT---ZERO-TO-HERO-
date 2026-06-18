// WHAT IS A NESTED OBJECT?
// >> IT IS AN OBJECT INSIDE OF ANOTHER OBJECT.


// EXAMPLE:

const person = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  age: 32,
  hobbies: ['cooking', 'fishing', 'playing bubbles'],
  job: 'fry cooker',
  address: {
    street: '123 conch street',
    city: 'bikini bottom',
    country: 'Int. waters',
    get stateAddress() {
      console.log(`${this.street}, ${this.city}, ${this.country}.`)
    }
  }
}

person.address.stateAddress;


// EXAMPLE:

// THE PERSON CLASS CONTAINS A NESTED OBJECT (INSTANCE OF ADDRESS)
class Person {
  // THE REST PARAMETER (...address) COLLECTS ALL EXTRA ARGUMENTS INTO AN ARRAY
  constructor(fullName, age, hobbies, ...address) {
    this.fullName = fullName;
    this.age = age;
    this.hobbies = hobbies;
    
    // WE INSTANTIATE THE NESTED OBJECT HERE
    // THE SPREAD OPERATOR (...) EXPANDS THE ARRAY BACK INTO INDIVIDUAL ARGUMENTS
    this.address = new Address(...address);
  }
}

// CREATING A NEW PERSON INSTANCE
// DATA IS PASSED INTO THE CONSTRUCTOR, TRIGGERING THE CREATION OF THE NESTED ADDRESS OBJECT
const person1 = new Person(
  'Patrick Garcia', 
  24, 
  ['basketball', 'cooking', 'online games'],
  'Collantes Street', 
  'Pulilan', 
  'Bulacan' 
);

// ACCESSING THE DATA THROUGH THE NESTED OBJECT HIERARCHY
console.log(person1.address.province); // OUTPUT: 'Bulacan'