import React from 'react';
import './card.css'

const Card = (props) => {
    return (
        <div className="cards-container__card">
            <div className='card__img-container'>
                <img 
                    src={props.img}
                    className="img-container__img"
                />
            </div>
            <div className="card__info-container">
                <p className='info-container__name' children={props.name}/>
                <ul className='info-container__pok-info'>
                    <li className='pok-info__type' children={props.type}/>
                    <li className='pok-info__height' children={props.height}/>
                    <li className='pok-info__weight' children={props.weight}/>
                    <li className='pok-info__name' children={props.id}/>
                    <li className='pok-info__name' children={props.isOpen}/>
                </ul>
            </div>
        </div>
    )
}

export default React.memo(Card);