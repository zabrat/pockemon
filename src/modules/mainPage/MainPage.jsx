import React from 'react';
import Header from '../header/Header.jsx';
import Home from '../home';
import AboutUs from '../aboutUs/AboutUs.jsx';
import Pokemons from '../pokemons'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './mainPageStyle.css';

const MainPage = () => {
    return(
        <>
            <Router>
                <Header/>
                <div className='root__main-container'>
                        <Switch>
                            <Route exact path='/'>
                                <Home/>
                            </Route>
                            <Route path='/about-us'>
                                <AboutUs/>
                            </Route>
                            <Route path='/pokemons'>
                                <Pokemons/>
                            </Route>
                        </Switch> 
                </div>
            </Router>
        </>
    )
}

export default React.memo(MainPage);