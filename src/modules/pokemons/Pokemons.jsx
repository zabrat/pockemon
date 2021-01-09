import React,{ useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './components/card/Card.jsx';
import './pokemonsStyle.css'

const Pokemons = props => {
    const { pokemonsData } = props;
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        console.log('did Mount')
        pokemonsData.length && setPokemons(pokemonsData);
        return () => {
            setPokemons([])
        }
    }, [pokemonsData])
    
    console.log('pock',pokemonsData)
    return (
        <div className='main-container__cards-container'>
            {pokemons.length ?
                pokemons.map(element =>
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
    
}

export default React.memo(Pokemons);
