// A NODELIST IS A COLLECTION OF NODES RETURNED BY METHODS LIKE .querySelectorAll().
// IT IS STATIC, MEANING IT DOES NOT UPDATE AUTOMATICALLY IF THE DOM CHANGES.
// WHILE IT SUPPORTS .forEach(), IT LACKS ARRAY METHODS LIKE .map() OR .filter().

// SELECT ALL ELEMENTS WITH THE CLASS 'myButton'
let buttons = document.querySelectorAll('.myButton');

// ITERATE THROUGH THE NODELIST AND ATTACH A CLICK EVENT LISTENER TO EACH BUTTON
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // REMOVE THE SPECIFIC TARGETED BUTTON ELEMENT FROM THE DOM
    event.target.remove();
  });
});