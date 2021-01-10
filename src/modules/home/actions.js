import constants from '../../constants/constants.js'

export const onSaveCurrentPok = (pokemonName, pokemonData, pokemonChars) => ({
    type: constants.SAVE_CURRENT_POK,
    payload: {
        name : pokemonName,
        data: pokemonData,
        chars: pokemonChars
    }
})

export const onSavePokChars = chars => ({
    type: constants.SAVE_POK_CHARS,
    payload: chars
})

