import * as api from '../../rest/REST';
import constants from '../../constants/constants'
import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from './actions';

export function* watchPokemons() {
    yield takeEvery(constants.SAVE_POKEMONS, workerSavePokemons);
}

function* workerSavePokemons() {
    try{
        if(!localStorage.getItem('pokemonsData')){  
            const pokemons = yield call(api.getSomePoks)
            localStorage.setItem('pokemonsData', JSON.stringify(pokemons))
        }

        const pokemonsData = JSON.parse(localStorage.getItem('pokemonsData'));

        yield put(actions.onSetPokemonsData(pokemonsData));
    } catch(err){
        console.log('ERROR', err)
    }
}