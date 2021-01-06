import React from 'react';
import Card from './components/card/Card.jsx'

const Pockemons = () => {
    return (
        <div className='main-container__cards-container'>
            <Card/>
        </div>
    )
}

export default React.memo(Pockemons);