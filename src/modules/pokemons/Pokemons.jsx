import React from 'react';
import Card from '../card';
import './pokemonsStyles.scss'

const Pokemons = props => {
    const { 
        pokemonsData
    } = props;
    
    return (
        <div className='main-container__cards-container'>
            {pokemonsData.length ? 
                pokemonsData.map(element =>
                element.isOpen ? 
                    <Card
                        id={element.id}
                        key={element.id}
                        img={element.img}
                        name={element.name.toUpperCase()}
                        type={element.type}
                    />
                : null
            ): null}
        </div>
    )
}

export default React.memo(Pokemons);