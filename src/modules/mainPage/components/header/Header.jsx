import React from 'react';

const Header = (props) => {
    return (
        <div className='root__header'>
            <ul>
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
        </div>
    )
}

export default React.memo(Header);