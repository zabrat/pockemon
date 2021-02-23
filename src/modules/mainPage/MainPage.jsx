import React from 'react';
import Header from '../header/Header.jsx';
import Home from '../home';
import AboutUs from '../aboutUs/AboutUs.jsx';
import Pokemons from '../pokemons'
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { getSomePoks } from '../../rest/REST';

import './mainPageStyle.scss';

const MainPage = props => {
    const { savePokemons } = props;

    savePokemons();
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