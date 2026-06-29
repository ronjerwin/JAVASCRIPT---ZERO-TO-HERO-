// WHAT IS AN ARRAY?
// >> A SPECIAL VARIABLE THAT CAN HOLD MORE THAN ONE VALUE AT A TIME UNDER A SINGLE NAME.
// >> ARRAYS ARE ORDERED COLLECTIONS, MEANING EACH ITEM HAS A NUMERIC INDEX STARTING AT 0.

// EXAMPLE:
// ARRAYS CAN STORE MIXED DATA TYPES (STRINGS, NUMBERS, BOOLEANS, OBJECTS).
const fruits = ['BANANA', 5, { NAME: 'RJ' }];

// ESSENTIAL ARRAY METHODS:
fruits.push('APPLE');      // ADDS AN ELEMENT TO THE END.
fruits.pop();              // REMOVES THE LAST ELEMENT.
fruits.unshift('ONION');   // ADDS AN ELEMENT TO THE BEGINNING (SHIFTING OTHERS TO THE RIGHT).
fruits.shift();            // REMOVES THE FIRST ELEMENT (SHIFTING OTHERS TO THE LEFT).
fruits.sort();             // SORTS ELEMENTS ALPHABETICALLY (NOTE: BE CAREFUL WITH NUMBERS!).
fruits.reverse();          // REVERSES THE ORDER OF ELEMENTS.






const alphabets = ['f', 'v', 'q', 'd', 'e', 'a', 'k', 'h', 'i', 'j', 'g', 'l', 'm', 'z', 'o', 'p', 'c', 'r', 's', 't', 'u', 'b', 'w', 'x', 'y', 'n'];

alphabets.sort();
console.log(alphabets)

const numbers = [15, 8, 6, 4, 5, 3, 7, 2, 9, 14, 11, 12, 13, 10, 1];
numbers.sort((a, b) => a - b);
console.log(numbers);
const fruits1 = ['banana', 'apple', 'orange', 'lemon', 'watermelon', 'cucumber', 'coconut', 'pomegranate'];
fruits1.sort((a, b) => a.localeCompare(b));
console.log(fruits1);


function renderProducts(data) {
 data.products.map((product) => {
      const newElement = document.createElement('div');
      newElement.classList.add('newElementContainer')
      newElement.innerHTML = `<p>${product.name}</p>
                             <p>${product.price}</p>
                             <p>${product.categories.join(', ')}</p>`

        document.body.appendChild(newElement)
    })

}

async function AllProducts() {
  const response = await fetch('products.json');

  try {
    if(!response.ok) {
      throw new Error('File not found!')
    }

    const data = await response.json();
   renderProducts(data);
  }
  catch(error) {
    console.error(error);
  }
}

AllProducts();