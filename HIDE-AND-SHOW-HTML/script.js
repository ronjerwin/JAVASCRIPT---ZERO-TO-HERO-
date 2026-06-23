const toggleVisibility = document.getElementById('toggleVisibility');
const image = document.getElementById('image');


toggleVisibility.addEventListener('click', () => {
  if(image.style.visibility === 'hidden') {
    image.style.visibility = 'visible';
    toggleVisibility.textContent = 'Hide';
  } else {
    image.style.visibility = 'hidden';
    toggleVisibility.textContent = 'Show';
  }
})

