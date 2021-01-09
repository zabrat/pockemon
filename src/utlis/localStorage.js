import { getSomePoks } from '../rest/REST';
import constants from '../constants/constants';

export function onSaveDataToLS(store) {
    const pokemonsData = localStorage.getItem('pokemonsData');

    if(!pokemonsData.length){
        getSomePoks().then(payload => {
            localStorage.setItem('pokemonsData', JSON.stringify(payload));
        })
    }

    store.dispatch({
        type: constants.SAVE_POKEMONS,
        payload: JSON.parse(pokemonsData),
    });

    console.log('DATA HASE BEEN SAVE IN LOCALSTORAGE');
}
