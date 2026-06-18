// WHAT IS GETTER AND SETTER?
// >> GETTER IS A SPECIAL METHOD THAT MAKES A PROPERTY READABLE.
// >> A METHOD THAT LETS YOU RETRIEVE THE VALUE OF A PROPERTY, OFTEN ALLOWING YOU TO COMPUTE OR VALIDATE THE VALUE BEFORE IT IS RETURNED.
// >> SETTER IS A SPECIAL METHOD THAT MAKES A PROPERTY WRITABLE.
// >> A METHOD THAT LETS YOU UPDATE THE VALUE OF A PROPERTY, ALLOWING YOU TO ADD VALIDATION LOGIC TO ENSURE THE DATA IS CORRECT BEFORE IT IS STORED.



class Person {
  constructor(firstName, lastName, age) {
    // ASSIGNING TO THESE PROPERTIES TRIGGERS THE SETTER METHODS
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // SETTER: VALIDATES THE DATA BEFORE STORING IT IN THE INTERNAL '_FIRSTNAME'
  set firstName(newFirstName) {
    if (typeof newFirstName !== 'string') {
      console.error("FIRST NAME SHOULD BE A TEXT");
    } else {
      this._firstName = newFirstName;
    }
  }

  // GETTER: PROVIDES CONTROLLED ACCESS TO THE INTERNAL PROPERTY
  get firstName() {
    return this._firstName;
  }

  // SETTER: ENSURES LAST NAME IS A VALID STRING
  set lastName(newLastName) {
    if (typeof newLastName !== 'string') {
      console.error("LAST NAME SHOULD BE A TEXT");
    } else {
      this._lastName = newLastName;
    }
  }

  // GETTER: RETURNS THE STORED LAST NAME
  get lastName() {
    return this._lastName;
  }

  // SETTER: ENSURES AGE IS A VALID NUMBER
  set age(newAge) {
    if (typeof newAge !== 'number') {
      console.error("AGE SHOULD BE A NUMBER.");
    } else {
      this._age = newAge;
    }
  }

  // GETTER: RETURNS THE STORED AGE
  get age() {
    return this._age;
  }
}

// CREATING AN INSTANCE
const person1 = new Person('Angelo', 'Catacutan', 25);

// ACCESSING PROPERTIES THROUGH THE GETTERS
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);



class Login {
  constructor(username, password) {
    // ASSIGNING THESE VALUES TRIGGERS THE SETTER METHODS BELOW
    this.username = username;
    this.password = password;
  }

  get sayHello() {
    console.log(`Hello, ${this.username}!`);
  }

  // SETTER: ENSURES USERNAME IS A STRING AND MEETS MINIMUM LENGTH REQUIREMENTS
  set username(newUserName) {
    if(typeof newUserName === 'string' && newUserName.length >= 8) {
        this._username = newUserName;
    }
    else {
      console.error('INVALID USERNAME.');
    }
  }

  // SETTER: ENSURES PASSWORD IS A STRING AND MEETS MINIMUM LENGTH REQUIREMENTS
  set password(newPassword) {
    if(typeof newPassword === 'string' && newPassword.length >= 8) {
        this._password = newPassword;
    } else {
      console.error('INVALID PASSWORD');
    }
  }

  // GETTER: PROVIDES ACCESS TO THE STORED USERNAME
  get username() {
    return this._username;
  }

  // GETTER: PROVIDES ACCESS TO THE STORED PASSWORD
  get password() {
    return this._password;
  }

  // GETTER: A COMPUTED PROPERTY THAT FORMATS THE STORED DATA DYNAMICALLY
  get credentials() {
    return `USERNAME: ${this._username}
PASSWORD: ${this._password}`;
  }
}

// CREATING AN INSTANCE
const user1 = new Login("Spongebob", "spongebob123456");

// ACCESSING DATA THROUGH GETTERS
console.log(user1.username);
console.log(user1.password);
console.log(user1.credentials);

console.log(user1.sayHello)


