import constants from '../../constants/constants.js';

const initialState = {
    pokemonsData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_POKEMONS:
            return {
                ...state,
                pokemonsData: action.payload,
            }
        case constants.DELETE_CARD:
            return {
                ...state,
                pokemonsData: state.pokemonsData.map(element => +action.payload === element.id ? { ...element, isOpen: false }: element)
            }
        default:
            return state;
    }
}