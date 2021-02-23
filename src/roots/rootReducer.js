import { combineReducers } from 'redux';
import pokemonsPage from '../manager/pockemons/reducer.js'
import homePage from '../manager/home/reducer.js'

export default combineReducers({
    pokemonsPage, homePage
});
