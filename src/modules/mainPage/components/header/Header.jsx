import React, {useCallback} from 'react';
import './header.css';
import pokeBall from '../../../../theme/images/Pokeball.svg';
import { getPockByName } from '../../../../rest/REST.js'


const pop = () => {
    getPockByName()
}

const Header = (props) => {
    const logoURL = 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg';
    const onGetAllPoks = useCallback(() => getPockByName(), [getPockByName])
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
                    onClick={onGetAllPoks}
                    children='Pokemons'
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