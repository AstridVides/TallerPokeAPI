function changePokemon(pokemon) {
    const pokemonData = {
        'charmander': {
            'name': 'Charmander',
            'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
            'description': 'Charmander es un Pokémon de tipo fuego. Es famoso por la llama que siempre arde en la punta de su cola.'
        },
        'bulbasaur': {
            'name': 'Bulbasaur',
            'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            'description': 'Bulbasaur es un Pokémon de tipo planta/veneno. Lleva una semilla en su espalda que crece a medida que lo hace.'
        },
        'squirtle': {
            'name': 'Squirtle',
            'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
            'description': 'Squirtle es un Pokémon de tipo agua. Utiliza su caparazón para defenderse y lanzar potentes chorros de agua.'
        },
        'pikachu': {
            'name': 'Pikachu',
            'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
            'description': 'Pikachu es un Pokémon de tipo eléctrico, conocido por sus habilidades para generar electricidad.'
        },
        'clefairy': {
            'name': 'clefairy',
            'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
            'description': 'En las noches de luna llena, Clefairy de diversos lugares se reúnen para bailar bajo su luz, la cual los hace flotar. '
        },
        'wormadam': {
        'name': 'wormadam',
        'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png',
        'description': 'Su apariencia varía según dónde evolucione. Los materiales que haya pasan a formar parte de su cuerpo.'
        }
    };

    const selectedPokemon = pokemonData[pokemon];
    document.getElementById('pokemonName').textContent = selectedPokemon.name;
    document.getElementById('pokemonImage').src = selectedPokemon.img;
    document.getElementById('pokemonDescription').textContent = selectedPokemon.description;
}
