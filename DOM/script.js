// DOCUMENT OBJECT MODEL (DOM) IS THE MODEL OF THE WEBPAGE ITSELF.
// IT IS AN OBJECT THAT REPRESENTS THE PAGE YOU SEE IN THE BROWSER AND PROVIDES AN API TO INTERACT WITH IT.

// CHANGING THE BROWSER TAB TITLE
document.title = `Document Object Model`;

// SELECTING THE HEADER ELEMENT FROM THE DOM
const header = document.getElementById('header');

// APPLYING STYLES DIRECTLY THROUGH THE DOM API
document.body.style.textAlign = 'center';

let username = 'Spongebob';

// UPDATING THE CONTENT DYNAMICALLY BASED ON THE USERNAME
header.textContent += username === '' ? ' Guess' : ` ${username}`;