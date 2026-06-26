const productContainer = document.getElementById('productContainer');


async function products() {

  const response = await fetch('products.json');

  try {
    if(!response.ok) {
      throw new Error('File not found!');
    }

    const data = await response.json();

    data.tech_products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
        card.innerHTML = `
        <h3>${product.name}</h3>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
        <p><strong>Features:</strong> ${product.features.join(', ')}</p>
        <p><em>Stock: ${product.stock} units left</em></p>
      `;

      productContainer.appendChild(card);
    })  
  }
  catch(error) {
    console.error(error)
  }
}

products();