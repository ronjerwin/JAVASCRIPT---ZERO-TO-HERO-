// WHAT IS A KEY EVENT?


const container = document.getElementById('container');
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener('keydown', () => {
  container.style.backgroundColor = 'red';
  container.textContent = '🫨';
});


document.addEventListener('keyup', () => {
  container.style.backgroundColor = 'aqua';
  container.textContent = '🫣';
});

document.addEventListener('keydown', (event) => {

  if(event.key.startsWith('Arrow')) {

    event.preventDefault()
    
    switch(event.key) {
      case 'ArrowUp':
        y -= moveAmount;
        break;
      case 'ArrowDown':
        y += moveAmount;
        break;
      case 'ArrowLeft':
        x -= moveAmount;
        break;
      case 'ArrowRight':
        x += moveAmount;
        break;
    }

    container.style.top = `${y}px`;
    container.style.left = `${x}px`;
  }

})