function buscarPokemon() {
    const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
    const pokemonInfo = document.getElementById('pokemonInfo');

    if (pokemonInput === '') {
        pokemonInfo.innerHTML += '<p>Por favor, introduce un nombre o número de Pokémon.</p>';
        return;
    }

    // Llamada a la PokeAPI
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el Pokémon.');
            }
            return response.json();
        })
        .then(data => {
            mostrarPokemon(data);
        })
        .catch(error => {
            pokemonInfo.innerHTML += '<p>No se encontró el Pokémon.</p>';
        });
}

function mostrarPokemon(pokemon) {
    const pokemonInfo = document.getElementById('pokemonInfo');
    const pokemonCard = `
        <div class="pokemon-card">
            <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <ul class="pokemon-stats">
                <li><strong>Número:</strong> ${pokemon.id}</li>
                <li><strong>Altura:</strong> ${(pokemon.height / 10).toFixed(1)} m</li>
                <li><strong>Peso:</strong> ${(pokemon.weight / 10).toFixed(1)} kg</li>
                <li><strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</li>
            </ul>
        </div>
    `;
    
    // Añade el nuevo Pokémon debajo del existente
    pokemonInfo.innerHTML += pokemonCard;
}

