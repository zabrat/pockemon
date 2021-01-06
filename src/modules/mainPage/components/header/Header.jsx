import React from 'react';
import './header.css';
import pokeBall from '../../../../theme/images/Pokeball.svg';

const Header = (props) => {
    const logoURL = 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg';

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
                    children='Home'
                />
                <li 
                    className='header__about-us'
                    onClick={props.openAboutUsPage}
                    children='About us'
                />
                <li 
                    className='header__pockemons'
                    onClick={props.openPockemonsPage}
                    children='Pockemons'
                />
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