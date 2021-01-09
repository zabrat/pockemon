import React, { useState } from 'react';
import './homeStyle.css'
import pokeBall from '../../theme/images/Pokeball.svg';
import { getPokDataByName } from '../../rest/REST.js'

const Home = props => {
    const [pokemonName, setPokemonName] = useState(null);
    const [pokemonData, setPokemonData] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        const { saveCurrentPok } = props;

        getPokDataByName(pokemonName)
        .then(pokemonData => {
            setPokemonData(pokemonData);
            saveCurrentPok(pokemonName, pokemonData)
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
            </div>   
    )
}

export default React.memo(Home);