// WHAT IS DOM NAVIGATION?
// >> IT IS USED TO NAVIGATE A SIBLING, CHILDREN, AND PARENT ELEMENT. 
// >> IT IS A PROCESS OF NAVIGATION THOUGH THE STRUCTURE OF AN HTML ELEMENT USING JAVASCRIPT.


// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSilbing
// .parentElement
// .children


// --------------- .firstElementChild -------------------
// GETS THE FIRST CHILD ELEMENT NODE OF THE SPECIFIED PARENT
const element1 = document.getElementById('fruits');
const firstChild = element1.firstElementChild;
firstChild.style.backgroundColor = 'yellow';

// --------------- .lastElementChild -------------------
// GETS THE LAST CHILD ELEMENT NODE OF THE SPECIFIED PARENT
const element2 = document.getElementById('fruits');
const lastChild = element2.lastElementChild;
lastChild.style.backgroundColor = 'green';

// --------------- .nextElementSibling -------------------
// GETS THE NEXT SIBLING ELEMENT OF THE SPECIFIED ELEMENT
const element3 = document.getElementById('apple');
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = 'orange';

// --------------- .previousElementSibling -------------------
// GETS THE PREVIOUS SIBLING ELEMENT OF THE SPECIFIED ELEMENT
const element4 = document.getElementById('potatoes');
const previousSibling = element4.previousElementSibling;
previousSibling.style.backgroundColor = 'blue';

// --------------- .parentElement -------------------
// GETS THE DIRECT PARENT ELEMENT OF THE SPECIFIED NODE
const element5 = document.getElementById('carrots');
const parentElement = element5.parentElement;
parentElement.style.backgroundColor = 'pink';

// --------------- .children -------------------
// GETS A LIVE HTMLCOLLECTION OF ALL CHILD ELEMENTS
const element6 = document.getElementById('desserts');
const childrens = element6.children;

// WE CONVERT THE HTMLCOLLECTION TO AN ARRAY TO USE ARRAY METHODS LIKE FOREACH
Array.from(childrens).forEach(child => child.style.backgroundColor = 'red');