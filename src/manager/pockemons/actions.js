import constants from '../../constants/constants';

export const onSetPokemonsData = (payload) => ({
     type: constants.SET_POKEMONS, 
     payload
})