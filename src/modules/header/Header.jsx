import React, {useCallback} from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import pokeBall from '../../theme/images/Pokeball.svg';
import logoURL from '../../theme/images/imagesUrl.js';
import { getSomePoks } from '../../rest/REST.js'

const Header = (props) => {
    const onGetSomePoks = useCallback(() => getSomePoks(), [getSomePoks])
    return (
        <div className='root__header'>
            <img 
                src={logoURL}
                className='header__logo'
            />
            <ul className='header__pages-container'>
                <li 
                    className='header__home'
                    onClick={props.openHomePage} 
                >
                    <Link to="/">Home</Link>
                </li>
                <li 
                    className='header__about-us'
                    onClick={props.openAboutUsPage}
                >
                    <Link to="/about-us">About us</Link>
                </li>
                <li 
                    className='header__pockemons'
                    onClick={onGetSomePoks}
                >
                    <Link to="/pokemons">Pokemons</Link>
                </li>
            </ul>
            <div className='header__search'>
                <input 
                    className='search__input'
                />
                <img 
                    src={pokeBall}
                    className='search__button'
                />
            </div>
        </div>
    )
}

export default React.memo(Header);