import constants from '../../constants/constants';

export const onSaveCurrentPok = (pokemonData, pokemonChars) => ({
    type: constants.SAVE_CURRENT_POK,
    payload: {
        data: pokemonData,
        chars: pokemonChars
    }
})