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
            .then(pokemonChar => saveCurrentPok(pokemonName, pokemonData, pokemonChar));

            setPokemonData(pokemonData);
        })
        .catch(() => alert("This pokemon isn't exist"))
    }

    const handleChange = event => {
        setPokemonName(event.target.value)
    }

    return(
            <div className='main-container__home-container'>
                <p
                    children='PokeSearcher'
                    className='search__search-phrase' 
                />
                <form 
                    onSubmit={handleSubmit}
                    className='header__search'
                >
                    <input 
                        // value={pokemonName}
                        onChange={handleChange}
                        className='search__input'
                    />
                    <input 
                        src={pokeBall}
                        type='image'
                        className='search__button'
                    />
                </form>
                {isSubmit && <PokemonWindow/>}
            </div>   
    )
}

export default React.memo(Home);