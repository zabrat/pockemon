const mainURL = 'https://pokeapi.co/api/v2/';

export const getSomePoks = async() => {
    const limit = 30;
    const offset = 0;
    const pokemonsData = [];

    const pokemonsListResp = await fetch(`${mainURL}pokemon?limit=${limit}&offset=${offset}`);
    const pokemonsListData = await pokemonsListResp.json();

    for(let element of pokemonsListData.results){
        const pokemonResp = await fetch(element.url);
        const pokemonData = await pokemonResp.json();

        const pokemonDataObj = {};

        pokemonDataObj.id = pokemonData.id;
        pokemonDataObj.name = pokemonData.name;
        pokemonDataObj.type = pokemonData.types[0].type.name;
        pokemonDataObj.height = pokemonData.height;
        pokemonDataObj.img = pokemonData.sprites.other['official-artwork']['front_default'];
        pokemonDataObj.weight = pokemonData.weight;
        pokemonDataObj.isOpen = true;

        pokemonsData.push(pokemonDataObj);
}

    return pokemonsData; 
}

export const getPokDataByName = async(name) => {
    const pokemonResp = await fetch(`${mainURL}pokemon/${name}`);
    const pokemonData = await pokemonResp.json();

    return pokemonData;
}