// ADD AND CHANGE HTML
// >> IT IS A PROCESS TO CREATE, INSERT, AND MODIFY HTML ELEMENT USING JAVASCRIPT.

// CREATE NEW PARAGRAPH ELEMENTS
const newElement1 = document.createElement('p');
const newElement2 = document.createElement('p');

// ASSIGN TEXT CONTENT TO THE NEW ELEMENTS
newElement1.textContent = 'Apple';
newElement2.textContent = 'Pineapple';

// SELECT THE EXISTING ELEMENT TO BE REMOVED
const banana = document.getElementById('banana');

// INSERT NEW ELEMENTS AT THE BEGINNING AND END OF THE 'FRUITS' CONTAINER
document.getElementById('fruits').prepend(newElement1);
document.getElementById('fruits').append(newElement2);

// REMOVE THE SPECIFIED ELEMENT FROM THE DOM
document.getElementById('fruits').removeChild(banana);


// EXAMPLE 2:

// CREATE A NEW LIST ITEM ELEMENT
const newListElement = document.createElement('li');

// SET THE TEXT CONTENT AND STYLE FOR THE NEW LIST ITEM
newListElement.textContent = 'Strawberry';
newListElement.style.backgroundColor = 'yellow';

// SELECT ALL EXISTING LIST ITEMS
const lists = document.querySelectorAll('li');

// INSERT THE NEW LIST ITEM BEFORE THE FOURTH ELEMENT IN THE LIST
document.getElementById('fruitLists').insertBefore(newListElement, lists[3]);