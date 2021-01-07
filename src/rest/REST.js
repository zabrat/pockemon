const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';

export const getPockByName = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error', error));
}