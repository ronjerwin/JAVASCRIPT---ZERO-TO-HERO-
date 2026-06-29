// WHAT IS OBJECT IN JAVASCRIPT?
// >> IT IS A COLLECTION OF RELATED PROPERTIES AND/OR METHODS.

const person1 = {
  firstName: 'Angelo',
  lastName: 'Catacutan',
  age: 30,
  address: {
    street: 'Masagana',
    barangay: 'Barangay 143',
    city: 'Calumpit',
    province: 'Bulacan'
  },
  // >> THIS IS A METHOD: A FUNCTION STORED AS A PROPERTY
  sayHello: (name) => console.log(`Hello ${name}`),
  isEmployed: true
};

// >> ACCESSING DATA USING DOT NOTATION
person1.sayHello('Patrick');
console.log(person1.isEmployed);

// >> ACCESSING NESTED OBJECT PROPERTIES
console.log(person1.address.city); // OUTPUT: Calumpit

// >> ADDING A NEW PROPERTY DYNAMICALLY
person1.job = 'Developer';

// >> UPDATING AN EXISTING PROPERTY
person1.age = 31;






const product = {
  id: 1,
  name: "Wireless Mouse",
  price: 29.99,
  inStock: true,
  categories: ["Electronics", "Accessories"],
  marketProduct: function() {console.log(`${this.name} for only ${this.price}. Buy Now!`)} 
}

product.marketProduct();



