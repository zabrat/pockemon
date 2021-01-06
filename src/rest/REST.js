const URL = 'https://pokeapi.co/api/v2/';

const getPockByName = (pockName) => {
    const resp = fetch(URL + pockname);
    const respData = resp.json();
}