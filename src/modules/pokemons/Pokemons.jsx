import React from 'react';
import PropTypes from 'prop-types';
import Card from './components/card/Card.jsx';
import './pokemonsStyle.css'

const Pokemons = props => {
    const {
        savePokemons,
        pokemonsData,
    } = props;

    return (
        <div className='main-container__cards-container'>
            {pokemonsData.length ?
                pokemonsData.map(element =>
                <Card
                    key={element.id}
                    img={element.img}
                    name={element.name.toUpperCase()}
                    type={element.type}
                    height={element.height}
                    weight={element.weight}
                    isOpen={element.isOpen}
                />
            ): null}
        </div>
    )
}

Pokemons.propTypes = {
    savePokemons: PropTypes.func.isRequired,
    pokemonsData: PropTypes.array.isRequired,
}

export default React.memo(Pokemons);
