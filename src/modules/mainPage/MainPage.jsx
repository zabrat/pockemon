import React from 'react';
import Header from './components/header/Header.jsx'
import Home from '../home/Home.jsx'
import './mainPageStyle.css'

const MainPage = () => {
    return(
        <>
            <Header/>
            <div className='root__main-container'>
                <Home/>
            </div>
        </>
    )
}

export default React.memo(MainPage);