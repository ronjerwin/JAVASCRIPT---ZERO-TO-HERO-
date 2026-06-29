const productContainer = document.getElementById('productContainer');
const cartContainer = document.getElementById('cartContainer');
const cart = [];

function renderCart() {
  cartContainer.innerHTML = "";

  cart.forEach((product) => {
    const item = document.createElement("div");

    item.innerHTML = `
      <p>${product.name}</p>
      <p>₱${product.price}</p>
    `;

    cartContainer.appendChild(item);
  });
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
        cart.push(product);
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


