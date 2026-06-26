const searchPokemon = document.getElementById('searchPokemon');
const fetchPokemon = document.getElementById('fetchPokemon');
const pokemonContainer = document.getElementById('pokemonContainer');

function displayPokemon(data) {
      pokemonContainer.innerHTML = '';
      
      const searchedPokemon = document.createElement('img');
      searchedPokemon.src = data.sprites.front_default;
      searchedPokemon.alr = data.name;

      pokemonContainer.appendChild(searchedPokemon);

}


async function checkPokemon() {
  const findPokemon = searchPokemon.value.toLowerCase();

  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${findPokemon}`);

    if(!response.ok) {
      throw new Error('Pokemon not found');
    }

    const data = await response.json();

    displayPokemon(data);

  }
  catch(error) {
    console.error(error);
    pokemonContainer.textContent = 'Pokemon not found!';
  }
}

fetchPokemon.addEventListener('click', checkPokemon);

