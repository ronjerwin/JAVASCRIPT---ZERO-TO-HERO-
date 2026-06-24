// WHAT IS CLASSLIST?
// >> IT IS USED TO ADD, TOGGLE, REMOVE, REPLACE, AND CHECK FOR THE PRESENCE OF CLASSES ON AN HTML ELEMENT.



const button = document.getElementById('myButton');


button.addEventListener('click', event => {

  if(event.target.classList.contains('disabled')) {
    event.target.textContent += '🤬';
    event.target.setAttribute('disabled', '');
  } else {
    event.target.classList.add('disabled');
  }
})

