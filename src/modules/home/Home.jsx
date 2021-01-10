import React, { useState } from 'react';
import './homeStyle.css'
import pokeBall from '../../theme/images/Pokeball.svg';
import { getPokDataByName, getPokCharById } from '../../rest/REST.js'
import PokemonWindow from '../pokemonWindow'

const Home = props => {
    const [pokemonName, setPokemonName] = useState(null);
    const [pokemonData, setPokemonData] = useState(null);
    const { 
        isSubmit,
        savePokChars,
        saveCurrentPok
    } = props;

    const handleSubmit = event => {
        event.preventDefault();

        getPokDataByName(pokemonName)
        .then(pokemonData => {
            getPokCharById(pokemonData.id)
            .then(result => saveCurrentPok(pokemonName, pokemonData, result));

            setPokemonData(pokemonData);
        })
    }

    const handleChange = event => {
        setPokemonName(event.target.value)
    }

    return(
            <div className='main-container__home-container'>
                <form 
                    onSubmit={handleSubmit}
                    className='header__search'
                >
                    <span 
                        children='Find your favorite Pokemon'
                        className='search__search-phrase' 
                    />
                    <input 
                        // value={pokemonName}
                        onChange={handleChange}
                        className='search__input'
                    />
                    <img 
                        src={pokeBall}
                        className='search__button'
                    />
                </form>
                {isSubmit && <PokemonWindow/>}
            </div>   
    )
}

export default React.memo(Home);