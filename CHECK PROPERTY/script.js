// WHAT IS CHECK PROPERTY?
// >> CHECK PROPERTY IS USED TO CHECK WETHER A RADIO BUTTON OR CHECKBOX IS SELECTED OR NOT.
// IT IS COMMONLY USED AS A CONDITION TO A CONDITIONAL STATEMENT LIKE IF STATEMENT.

// EXAMPLE:

  const myCheckbox = document.getElementById('myCheckbox');
  const checkboxLabel = document.getElementById('checkboxLabel');
  const resultContainer = document.getElementById('resultContainer');
  const myRadio1 = document.getElementById('myRadio1');
  const myRadio2 = document.getElementById('myRadio2');
  const myRadio3 = document.getElementById('myRadio3');
  let facebook = false;
  let tiktok = false;
  let instagram = false;

  myCheckbox.addEventListener('click', () => {
    if(myCheckbox.checked) {
      checkboxLabel.textContent = "Followed!";
    } else {
      checkboxLabel.textContent = "Follow";
    }
  })

  function handleSubmit() {
    if(myRadio1.checked) {
      resultContainer.innerHTML += `<p>You followed me on Facebook. Thanks!</p>`;
      facebook = true;
    } else if(myRadio2.checked) {
      resultContainer.innerHTML += `<p>You followed me on TikTok. Thanks!</p>`;
      tiktok = true;
    } else if(myRadio3.checked) {
      resultContainer.innerHTML += `<p>You followed me on Instagram. Thanks!</p>`;
      instagram = true;
    } 

    if(facebook && tiktok && instagram) {
      resultContainer.innerHTML += `<p>You Followed me to all socials. Super Thanks!!</p>`;
    }
  }




