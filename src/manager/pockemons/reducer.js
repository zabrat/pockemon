import constants from '../../constants/constants.js';

const initialState = {
    pokemonsData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_POKEMONS:
            return {
                ...state,
                pokemonsData: action.payload,
            }
        default:
            return state;
    }
}