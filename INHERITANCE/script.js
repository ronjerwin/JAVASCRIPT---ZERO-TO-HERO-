// WHAT IS INHERITANCE?
// >> IT ALLOWS A NEW CLASS TO INHERIT A PROPERTIES AND METHOD FROM THE EXISTING CLASS (PARENT -> CHILD).
// >> IT USED TO HELP WITH CODE REUSABILITY.

// THE PARENT CLASS (BASE CLASS) PROVIDES SHARED PROPERTIES AND METHODS
class Animal {
  alive = true;

  constructor(name) {
    this.name = name;
  }

  isEating() {
    console.log(`This ${this.name} is eating.`);
  }

  isSleeping() {
    console.log(`This ${this.name} is sleeping.`);
  }
}

// THE CHILD CLASS 'Pigeon' INHERITS EVERYTHING FROM 'Animal'
// 'extends' CREATES AN "IS-A" RELATIONSHIP (A PIGEON IS AN ANIMAL)
class Pigeon extends Animal {
  constructor(name) {
    super(name); // CALLS THE PARENT CONSTRUCTOR TO SET THE NAME
  }

  isFlying() {
    console.log(`This ${this.name} is flying.`);
  }
}

// THE CHILD CLASS 'Fish' ALSO INHERITS FROM 'Animal'
class Fish extends Animal {
  constructor(name) {
    super(name); // CALLS THE PARENT CONSTRUCTOR
  }

  isSwimming() {
    console.log(`This ${this.name} is swimming.`);
  }
}

// CREATING INSTANCES OF THE CHILD CLASSES
const fish = new Fish('Goldfish');
const pigeon = new Pigeon('Racing Pigeon');

// DEMONSTRATING THAT CHILD CLASSES CAN USE PARENT METHODS
fish.isSwimming();        // CHILD METHOD
console.log(fish.alive);  // INHERITED PROPERTY

pigeon.isFlying();        // CHILD METHOD
console.log(pigeon.alive); // INHERITED PROPERTY