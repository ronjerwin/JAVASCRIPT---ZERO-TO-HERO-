

  let registeredUsername;
  let registeredPassword;

  function handleRegistration() {

  const username = document.getElementById('myUsername');
  const password = document.getElementById('myPassword');
  const result = document.getElementById('result');
    
    if(username.value === '' || password.value === '') {
       result.style.color = 'red';
       result.textContent = 'Invalid Credentials!';
    } else {
      registeredUsername = username.value;
      registeredPassword = password.value;
      result.style.color = 'green';
      result.textContent = 'Account Registered!';

     setTimeout(() => {
    document.querySelector('.register-section').style.display = 'none';
    document.querySelector('.login-section').style.display = 'block';
    }, 3000);
    }




  }


 


  function handleLogin() {
    const loginUsername = document.getElementById('loginUsername');
    const loginPassword = document.getElementById('loginPassword');
    const loginResult = document.getElementById('resultLogin');
    

    if(loginUsername.value === registeredUsername && loginPassword.value === registeredPassword) {
      loginResult.style.color = 'green';
      loginResult.textContent = 'Successful Login.';

    setTimeout(() => {
    document.querySelector('.login-section').style.display = 'none';
    document.getElementById('welcomeSection').style.display = 'block';
    document.getElementById('welcomeSection').innerHTML = `<h1>Welcome ${loginUsername.value}</h1>`;
    }, 3000);
    } else {
      loginResult.style.color = 'red';
      loginResult.textContent = 'unsuccessful Login.';
    }

    
  }
