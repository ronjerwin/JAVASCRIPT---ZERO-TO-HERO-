// WHAT IS STATIC KEYWORD?
// >> IT DEFINES THE PROPERTIES AND/OR METHOD OF A CLASS ITSELF NOT THE OBJECT IT CONTAINS.
// >> STATIC MEANING IT BELONGS TO THE ROOT ON WHERE IT IS DECLARED.


// EXAMPLE:

class User {
  // STATIC PROPERTY: SHARED BY ALL INSTANCES, LIVES ON THE CLASS ITSELF
  static userCount = 0;

  constructor(username) {
    this.username = username; // INSTANCE PROPERTY: UNIQUE TO THIS SPECIFIC OBJECT
    User.userCount++;        // INCREMENT THE STATIC COUNT WHENEVER A NEW OBJECT IS CREATED
  }

  // STATIC METHOD: CAN BE CALLED WITHOUT CREATING AN INSTANCE
  static getUserCount() {
    return User.userCount;
  }

  // INSTANCE METHOD: USES 'this' TO ACCESS DATA OF A SPECIFIC OBJECT
  userGreet() {
    console.log(`Mabuhay! Sir ${this.username}`);
  }
}

// CREATING INDIVIDUAL INSTANCES
const user1 = new User('RJ');
const user2 = new User('Lorenze');
const user3 = new User('Kenneth');

// ACCESSING INSTANCE METHODS AND PROPERTIES
user1.userGreet(); 

// ACCESSING STATIC PROPERTY THROUGH THE CLASS NAME
console.log(`Current User Count: ${User.userCount}`);