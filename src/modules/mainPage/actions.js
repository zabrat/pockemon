import constants from '../../constants/constants.js'

export const onSavePokemons = pokemonsData => ({
    type: constants.SAVE_POKEMONS,
    payload: pokemonsData
})