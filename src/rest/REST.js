const mainURL = 'https://pokeapi.co/api/v2/';

export const getSomePoks = () => {
    const limit = 30;
    const offset = 0;

    const pokemonsData = [];

    return fetch(`${mainURL}pokemon?limit=${limit}&offset=${offset}`)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(element => {
                    fetch(element.url)
                        .then(response => response.json())
                        .then(data => {
                            const pokemonData = {};
                            pokemonData.id = data.id;
                            pokemonData.name = data.name;
                            pokemonData.type = data.types[0].type.name;
                            pokemonData.height = data.height;
                            pokemonData.img = data.sprites.other['official-artwork']['front_default'];
                            // pokemonData.img = data.sprites.other.dream_world.front_default;
                            pokemonData.weight = data.weight;
                            pokemonData.isOpen = true;

                            console.log(pokemonData)
                            // pokemonsData.push(pokemonData);
                        })
                        .catch(error => console.error('Error', error));
                });
                // console.log(pokemonsData);
            })
            .catch(error => console.error('Error', error));

}