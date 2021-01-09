import React, { Suspense } from 'react';
import './mainPageStyle.css';
import Header from '../header/Header.jsx';
import Home from '../home/Home.jsx';
import AboutUs from '../aboutUs/AboutUs.jsx';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
const Pokemons = React.lazy(() => import('../pokemons'));

const MainPage = () => {
    return(
        <Router>
            <Header/>
            <div className='root__main-container'>
                <Suspense fallback={<div>Download...</div>}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about-us' component={AboutUs} />
                        <Route path='/pokemons' component={Pokemons} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}

export default React.memo(MainPage);
