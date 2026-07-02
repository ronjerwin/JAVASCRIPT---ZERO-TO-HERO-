const productContainer = document.getElementById('productContainer');
const cartContainer = document.getElementById('cartContainer');
const cart = [];


function renderCart() {
  cartContainer.innerHTML = "";

  cart.forEach((product, index) => {
    let item = document.createElement("div");

    item.innerHTML = `
      <p>${product.name}</p>
      <p>₱${product.price}</p>
      <div>
       Quantity: <button class="incrementProductQuantity">+</button> ${product.quantity} <button class="decrementProductQuantity">-</button>
      </div>
      <button class='deleteButton'>delete</button>
    `;

    item.querySelector('.incrementProductQuantity').addEventListener('click', () => {
      if(product.quantity >= product.inventory) {
        alert(`Cannot add more than ${product.inventory} items of ${product.name}.`);
        return;
      }
      product.quantity += 1;
      renderCart();
    });

    item.querySelector('.decrementProductQuantity').addEventListener('click', () => {

      if(product.quantity === 1) {
        cart.splice(index, 1);
        renderCart();
      } 
        product.quantity -= 1;
        renderCart();
      
    });

    item.querySelector('.deleteButton').addEventListener('click', () => {
      cart.splice(index, 1)
      console.log('Cart updated:', cart);
      renderCart();
    })

    cartContainer.appendChild(item);
  });

  let total = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  const totalCost = document.createElement('p'); 
  totalCost.textContent = `Total Cost: ₱${total.toFixed(2)}`;
  cartContainer.appendChild(totalCost);
}


function renderProducts(data) {
      data.products.forEach((product) => {
      const card = document.createElement('div');
      card.classList.add('productDesc');
      card.innerHTML = ` <p>Product Name: ${product.name}</p>
                         <p>Price: ${product.price}</p>
                         <p>Category: ${product.category}</p>
                         <p>Stocks: ${product.inventory}</p>
                         <button class='cartButton'>Add to Cart</button>`;


      card.querySelector('.cartButton').addEventListener('click', () => {
       const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.push(product);
        }
        console.log('Cart updated:', cart);
        renderCart();
      })
        productContainer.appendChild(card);
    })
}




async function getProductInfo() {
  try {
    const response = await fetch('products.json');
    if(!response.ok) throw new Error('File note found!');
    
    const data = await response.json();
    renderProducts(data);
  }
  catch(error) {
    console.error(error);
  }
}
getProductInfo();


