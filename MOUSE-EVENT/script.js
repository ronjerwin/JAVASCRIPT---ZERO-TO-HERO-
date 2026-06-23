// WHAT IS A MOUSE EVENT?
// >> IT LISTENS FOR A SPECIFIC EVENTS TO CREATE INTERACTIVE WEB PAGES.
// >> IT IS USED TO MAKE AN INTERACTION BETWEEN ELEMENTS AND MOUSE.

// SELECT NECESSARY ELEMENTS FROM THE DOM
const emoteContainer = document.getElementById('emoteContainer');
const paragraphs = document.querySelectorAll('p');
const handleClick = document.getElementById('handleClick');

// DEFINE THE MOUSE EVENT HANDLERS WITHIN AN OBJECT FOR BETTER ORGANIZATION
const mouseEvent = {
  // TRIGGERED WHEN THE MOUSE ENTERS THE TARGET ELEMENT
  mouseover: () => {
    emoteContainer.style.cursor = 'pointer';
    emoteContainer.style.backgroundColor = 'tomato';
    paragraphs[0].style.fontSize = '50px';
    paragraphs[0].style.textAlign = 'center';
    paragraphs[0].textContent = `Don't Click Me`;
    paragraphs[1].textContent = `🥲`;
  },
  // TRIGGERED WHEN THE MOUSE LEAVES THE TARGET ELEMENT
  mouseout: () => {
    emoteContainer.style.backgroundColor = 'yellow';
    paragraphs[1].textContent = `😋`;
    paragraphs[0].textContent = `Hello`;
  },
  // TRIGGERED WHEN THE TARGET ELEMENT IS CLICKED
  click: () => {
    emoteContainer.style.backgroundColor = 'red';
    paragraphs[0].textContent = `Ouch!`;
    paragraphs[1].textContent = `😣`;
  }
};

// ATTACH EVENT LISTENERS TO THE SPECIFIC CLICK-HANDLER ELEMENT
handleClick.addEventListener('mouseover', mouseEvent.mouseover);
handleClick.addEventListener('mouseout', mouseEvent.mouseout);
handleClick.addEventListener('click', mouseEvent.click);