import { getSomePoks } from '../rest/REST';
import constants from '../constants/constants';

export async function onSaveDataToLS(store) {
    const pokemonsData = await localStorage.getItem('pokemonsData');

    if(!pokemonsData){
        getSomePoks().then(payload => {
            console.log('payload', payload)
            localStorage.setItem('pokemonsData', JSON.stringify(payload));
            store.dispatch({
                type: constants.SAVE_POKEMONS,
                payload
            });
        })

        return;
    }

    store.dispatch({
        type: constants.SAVE_POKEMONS,
        payload: JSON.parse(pokemonsData),
    });
}
