import { getSomePoks } from '../rest/REST';
import constants from '../constants/constants';

export async function onSaveDataToLS(store) {
    const pokemonsData = JSON.parse(localStorage.getItem('pokemonsData')) || [];

    if(!pokemonsData.length){
        await getSomePoks().then(payload => {
            localStorage.setItem('pokemonsData', JSON.stringify(payload));
            console.log('DATA HASE BEEN SAVE IN LOCALSTORAGE');
        })
    }

    await store.dispatch({
        type: constants.SAVE_POKEMONS,
        payload: pokemonsData,
    });
}
