import { all, call } from 'redux-saga/effects';
import { watchPokemons } from '../manager/pockemons/saga.js';
import { watchHome } from '../manager/home/saga.js';

const sagaList = [
    watchPokemons, watchHome
];

export function* watchRootSaga() {
    yield all(sagaList.map(saga => call(saga)));
}