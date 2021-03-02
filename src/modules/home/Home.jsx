import './homeStyle.scss'
import React, { useState } from 'react';
import pokeBall from '../../theme/images/Pokeball.svg';
import PokemonWindow from '../pokemonWindow'

const Home = props => {
    const [pokemonName, setPokemonName] = useState(null);
    const { 
        isSubmit,
        setCurrentPok,
    } = props;

    const handleSubmit = event => {
        event.preventDefault();

        setPokemonName('');
        setCurrentPok(pokemonName);
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
                        onChange={handleChange}
                        className='search__input'
                    />
                    <input 
                        src={pokeBall}
                        alt={pokeBall}
                        type='image'
                        className='search__button'
                    />
                </form>
                {isSubmit && <PokemonWindow/>}
            </div>   
    )
}

export default React.memo(Home);