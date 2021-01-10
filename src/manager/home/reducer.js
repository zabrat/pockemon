import constants from '../../constants/constants.js';

const initialState = {
    pokemonName: null,
    pokemonData: null,
    description: null,
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
        case constants.CLOSE_WINDOW:
            return {
                ...state,
                pokemonName: null,
                pokemonData: null,
                description: null,
                isSubmit: false
            }
        case constants.SAVE_POK_CHARS:
            return {
                ...state,
                description: action.payload
            }
        default:
            return state;
    }
}