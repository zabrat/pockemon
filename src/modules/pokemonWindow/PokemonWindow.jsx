import React from 'react';
import './pokemonWindowStyle.scss'

const PokemonWindow = props => {
    const { 
        pokemonData,
        closeWindow,
        pokemonChars
    } = props;

    const handleClick = () => {
        closeWindow();
    }

    return(
            <div className='home-container__pokemon-window'>
                <button 
                    children='x'
                    onClick={handleClick}
                    className='pokemon-window__close-button'
                />
               <img 
                    src={pokemonData.sprites.other['official-artwork']['front_default']}
                    alt={pokemonData.sprites.other['official-artwork']['front_default']}
               /> 
               <div className='pokemon-window__pokemon-info'>
                   <p 
                        children={pokemonData.name.toUpperCase()}
                        className='pokemon-info__pokemon-name'
                   />
                   <ul className='pokemon-info__some-info'>
                       <li 
                            children={`Abilities: ${pokemonData.abilities.map(element => (' '+element.ability.name))}`}
                            className='pokemon-info__info'
                       />
                       <li 
                            children={`Height: ${pokemonData.height} decimetres`}
                            className='pokemon-info__info'
                       />
                       <li 
                            children={`Weight: ${pokemonData.weight} hectograms`}
                            className='pokemon-info__info'
                       />
                       <li 
                            children={`Description: ${pokemonChars.description}`}
                            className='pokemon-info__info'
                       />
                       <li 
                            children={`Highest stat: ${pokemonChars.highest_stat}`}
                            className='pokemon-info__info'
                       />
                       <li 
                            children={`Type: ${pokemonData.types.map(element => (' '+element.type.name))}`}
                            className='pokemon-info__info'
                       />
                       <li 
                            children={`Base experience: ${pokemonData.base_experience}`}
                            className='pokemon-info__info'
                       />
                   </ul>
               </div>
            </div>   
    )
}

export default React.memo(PokemonWindow);