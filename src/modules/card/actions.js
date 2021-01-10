import constants from '../../constants/constants.js'

export const onDeleteCard = cardId => ({
    type: constants.DELETE_CARD,
    payload: cardId
})