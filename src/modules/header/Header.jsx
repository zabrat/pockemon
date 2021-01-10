import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logoURL from '../../theme/images/imagesUrl.js';

const Header = (props) => {
    return (
        <div className='root__header'>
            <img 
                alt={logoURL}
                src={logoURL}
                className='header__logo'
            />
            <ul className='header__pages-container'>
                <li 
                    className='header__home'
                >
                    <Link to="/">Home</Link>
                </li>
                <li 
                    className='header__about-us'
                >
                    <Link to="/about-us">About us</Link>
                </li>
                <li 
                    className='header__pockemons'
                >
                    <Link to="/pokemons">Pokemons</Link>
                </li>
            </ul>   
        </div>
    )
}

export default React.memo(Header);