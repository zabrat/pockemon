import constants from '../../constants/constants.js'

export const onSaveCurrentPok = (pokemonName, pokemonData) => ({
    type: constants.SAVE_CURRENT_POK,
    payload: {
        name : pokemonName,
        data: pokemonData
    }
})

export const onSavePokChars = chars => ({
    type: constants.SAVE_POK_CHARS,
    payload: chars
})

