// WHAT IS A SUPER KEYWORD?
// >> IT ALLOWS SUBCLASS TO REUSE COSTRUCTOR PROPERTIES OF THE PARENT CLASS TO MAKE A CLEAN AND SHORTER CODE.
// >> IT IS USED PRIMARILY TO CALL THE PARENT'S CONSTRUCTOR TO INITIALIZE INHERITED PROPERTIES, OR TO INVOKE PARENT METHODS, ALLOWING YOU TO EXTEND EXISTING FUNCTIONALITY WITHOUT DUPLICATING CODE.

// EXAMPLE:


// THE PARENT CLASS HOLDS SHARED PROPERTIES THAT ALL ANIMALS HAVE
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// THE 'EXTENDS' KEYWORD ESTABLISHES THAT FISH IS A CHILD OF ANIMAL
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    // 'SUPER' CALLS THE CONSTRUCTOR OF THE PARENT CLASS (ANIMAL)
    // THIS INITIALIZES 'NAME' AND 'AGE' USING THE PARENT'S LOGIC
    super(name, age); 
    
    // NOW WE ADD THE PROPERTY UNIQUE ONLY TO FISH
    this.swimSpeed = swimSpeed;
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    // WE MUST CALL SUPER() BEFORE ACCESSING 'THIS'
    super(name, age);
    this.flySpeed = flySpeed;
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    // REUSING THE PARENT CONSTRUCTOR SAVES US FROM RE-WRITING NAME/AGE ASSIGNMENTS
    super(name, age);
    this.runSpeed = runSpeed;
  }
}

// CREATING INSTANCES
const fish = new Fish('fish', 1, 15);
const hawk = new Hawk('hawk', 2, 50);
const rabbit = new Rabbit('rabbit', 3, 35);

console.log(fish);