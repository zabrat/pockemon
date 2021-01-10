import React from 'react';
import Card from '../card';
import './pokemonsStyle.css'

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
                        height={element.height}
                        weight={element.weight}
                        isOpen={element.isOpen}
                    />
                : null
            ): null}
        </div>
    )
}

export default React.memo(Pokemons);