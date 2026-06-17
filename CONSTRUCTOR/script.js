// WHAT IS A CONSTRUCTOR?
// >>  IT IS USED TO DEFINE PROPERTIES OR METHODS.



const constructorContainer = document.querySelector('#constructorContainer');

  function Product (name, price, desc) {
    this.name = name;
    this.price = price;
    this.desc = desc;
  }

  const products = [
    new Product('AOC', 249.99, 'Gaming Monitor'),
    new Product('Leaven K620', 60.00, 'Mechanical Keyboard'),
    new Product('Beats Studio Headphone', 150.99, 'Quality Headphone')
  ];

  let displayProducts = '';

  products.forEach((element) => {
    displayProducts += `<div class='card-container'>
      <p>${element.name}</p>
      <p>${element.price}</p>
      <p>${element.desc}</p>
    </div>`
  });

  constructorContainer.innerHTML = displayProducts;


  // ADDING A METHOD TO THE PROTOTYPE SO ALL INSTANCES SHARE IT
Product.prototype.getDetails = function() {
  return `${this.name} costs $${this.price}`;
};

// NOW EVERY PRODUCT OBJECT HAS ACCESS TO .getDetails()
console.log(products[0].getDetails());