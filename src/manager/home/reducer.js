import constants from '../../constants/constants.js';

const initialState = {
    pokemonData: null,
    pokemonChars: null,
    isSubmit: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_CURRENT_POK:
            return {
                ...state,
                pokemonData: action.payload.data,
                pokemonChars:action.payload.chars,
                isSubmit: true
            }
        case constants.CLOSE_WINDOW:
            return {
                ...state,
                pokemonData: null,
                pokemonChars: null,
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