import * as api from '../../rest/REST';
import constants from '../../constants/constants'
import { takeEvery, put, call } from 'redux-saga/effects';

export function* watchPokemons() {
    yield takeEvery(constants.SAVE_POKEMONS, workerPokemons);
}

function* workerPokemons() {

    if(!localStorage.getItem('pokemonsData')){
        const pokemons = yield call(api.getSomePoks)
        localStorage.setItem('pokemonsData', JSON.stringify(pokemons))
    }

    const pokemonsData = JSON.parse(localStorage.getItem('pokemonsData'));

    yield put({ type: constants.SET_POKEMONS, payload: pokemonsData });
}