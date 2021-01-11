import React from 'react';
import PropTypes from 'prop-types';
import './card.scss'

const Card = props => {
    const { deleteCard } = props;

    const handleClick = event => {
        deleteCard(event.target.id);
    }

    return (
        <div className={`cards-container__card ${props.type}`}>
            <button
                id={props.id}
                children='x'
                className='card__close-button'
                onClick={handleClick}
            />
            <div className='card__img-container'>
                <img
                    src={props.img}
                    alt={props.img}
                    className='img-container__img'
                />
            </div>
            <div className='card__info-container'>
                <p 
                    className='info-container__name' 
                    children={props.name} 
                />
                <ul className='info-container__pok-info'>
                    <li
                        className='pok-info__type'
                        children={`Type: ${props.type}`}
                    />
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
};

export default React.memo(Card);