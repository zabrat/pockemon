import * as api from '../../rest/REST';
import constants from '../../constants/constants';
import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from './actions';

export function* watchHome() {
    yield takeEvery(constants.SET_CURRENT_POKEMON, workerSetPokemon);
}

function* workerSetPokemon(action) {
    try{
        const pokemonData = yield call(api.getPokDataByName, action.payload);
        const pokemonChars = yield call(api.getPokCharById, pokemonData.id);

        yield put(actions.onSaveCurrentPok(pokemonData, pokemonChars));
    } catch(err){
        console.log('ERROR', err);
        alert("This pokemon isn't exist");
    }
}