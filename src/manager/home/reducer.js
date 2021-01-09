import constants from '../../constants/constants.js';

const initialState = {
    pokemonName: null,
    pokemonData: null,
    isSubmit: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_CURRENT_POK:
            return {
                ...state,
                pokemonName: action.payload.name,
                pokemonData: action.payload.data,
                isSubmit: true
            }
        default:
            return state;
    }
}