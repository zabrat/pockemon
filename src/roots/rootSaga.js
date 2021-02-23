import { all, call } from 'redux-saga/effects';
import { watchPokemons } from '../manager/pockemons/saga.js';

const sagaList = [
    watchPokemons
];

export function* watchRootSaga() {
    yield all(sagaList.map(saga => call(saga)));
}