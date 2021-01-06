const URL = 'https://pokeapi.co/api/v2/';

const getPockByName = (pockName) => {
    const resp = fetch(URL + 'pokemon/' + pockname);
    const respData = resp.json();

    return respData;
}