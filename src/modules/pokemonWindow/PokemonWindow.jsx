import React, { useState } from 'react';
import './pokemonWindowStyle.css'

const PokemonWindow = props => {
    const { pokemonData } = props;

    const handleClick = () => {
        const { closeWindow } = props;

        closeWindow();
    }

    return(
            <div className='home-container__pokemon-window'>
                <button 
                    children='x'
                    onClick={handleClick}
                    className='pokemon-window__close-button'
                />
               <img src={pokemonData.sprites.other['official-artwork']['front_default']}/> 
               <div className='pokemon-window__pokemon-info'>
                   <p 
                        children={pokemonData.name.toUpperCase()}
                        className='pokemon-info__pokemon-name'
                   />
                   <ul className='pokemon-info__some-info'>
                       <li 
                            children={`Abilities: ${pokemonData.abilities.map(element => element.ability.name)}`}
                            className='pokemon-info__some-info'
                       />
                       <li 
                            children={`Height: ${pokemonData.height} decimetres`}
                            className='pokemon-info__some-info'
                       />
                       <li 
                            children={`Weight: ${pokemonData.weight} hectograms`}
                            className='pokemon-info__some-info'
                       />
                       <li className='pokemon-info__some-info'/>
                       <li className='pokemon-info__some-info'/>
                       <li className='pokemon-info__some-info'/>
                   </ul>
               </div>
            </div>   
    )
}

export default React.memo(PokemonWindow);