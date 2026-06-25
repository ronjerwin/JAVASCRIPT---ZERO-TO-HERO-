const userList = document.getElementById('user-list');
const searchUser = document.getElementById('search');

// FUNCTION TO DISPLAY USERS ON THE WEBPAGE
function renderUsers(userArray) {
  // CLEAR THE LIST BEFORE ADDING NEW ITEMS
  userList.innerHTML = ''; 

  userArray.forEach(user => {
    const newList = document.createElement('li');
    newList.textContent = `${user.name}, ${user.role}`;
    userList.appendChild(newList);
  });
}

async function fetchData() {
  try {
    // REQUEST DATA FROM JSON FILE
    const response = await fetch('users.json');

    if (!response.ok) {
      throw new Error('FILE NOT FOUND!');
    }

    // CONVERT RESPONSE TO JS OBJECT
    const users = await response.json();

    // INITIAL RENDER: SHOW ALL USERS AT THE START
    renderUsers(users);

    // EVENT LISTENER FOR SEARCH INPUT
    searchUser.addEventListener('input', (event) => {
      const searchText = event.target.value.toLowerCase();
      
      // FILTER USERS BASED ON THE SEARCH TEXT
      const filtered = users.filter((user) => {
        return user.role.toLowerCase().includes(searchText) || user.name.toLowerCase().includes(searchText);
      });

      // RENDER THE FILTERED LIST
      renderUsers(filtered);
    });

  } catch (error) {
    // LOG ERROR IF SOMETHING GOES WRONG
    console.error(error);
  }
}

fetchData();