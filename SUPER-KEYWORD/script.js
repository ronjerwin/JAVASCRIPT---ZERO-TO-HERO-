// WHAT IS A SUPER KEYWORD?
// >> IT ALLOWS SUBCLASS TO REUSE COSTRUCTOR PROPERTIES OF THE PARENT CLASS TO MAKE A CLEAN AND SHORTER CODE.
// >> IT IS USED PRIMARILY TO CALL THE PARENT'S CONSTRUCTOR TO INITIALIZE INHERITED PROPERTIES, OR TO INVOKE PARENT METHODS, ALLOWING YOU TO EXTEND EXISTING FUNCTIONALITY WITHOUT DUPLICATING CODE.

// EXAMPLE:


// THE PARENT CLASS HOLDS SHARED PROPERTIES AND METHODS THAT ALL ANIMALS HAVE
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // THIS METHOD IS SHARED BY ALL SUBCLASSES
  move(speed) {
    console.log(`The ${this.name} is moving at a speed of ${speed}kph.`);
  }
}

// THE 'EXTENDS' KEYWORD ESTABLISHES THAT FISH IS A CHILD OF ANIMAL
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    // 'SUPER' CALLS THE CONSTRUCTOR OF THE PARENT CLASS (ANIMAL)
    super(name, age); 
    
    // INITIALIZE PROPERTY UNIQUE TO FISH
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`The ${this.name} is swimming`);
    // 'SUPER' INVOKES THE PARENT'S 'MOVE' METHOD, REUSING ITS LOGIC
    super.move(this.swimSpeed);
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    // PASS DATA UP TO THE PARENT CONSTRUCTOR
    super(name, age);
    this.flySpeed = flySpeed;
  }

  fly() {
    console.log(`The ${this.name} is flying`);
    // REUSING PARENT METHOD LOGIC VIA 'SUPER'
    super.move(this.flySpeed);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    // REUSING PARENT CONSTRUCTOR FOR INITIALIZATION
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`The ${this.name} is running`);
    // REUSING PARENT METHOD LOGIC VIA 'SUPER'
    super.move(this.runSpeed);
  }
}

// CREATING INSTANCES
const fish = new Fish('fish', 1, 15);
const hawk = new Hawk('hawk', 2, 50);
const rabbit = new Rabbit('rabbit', 3, 35);

// DEMONSTRATING BOTH CONSTRUCTOR AND METHOD INHERITANCE
console.log(fish);
hawk.fly();
fish.swim();
rabbit.run();