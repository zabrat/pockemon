import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './roots/rootReducer/rootReducer';
import { Provider } from 'react-redux';
import { getSomePoks } from '../src/rest/REST.js'


function init() {
    if(!localStorage.getItem('pokemonsData')){
        getSomePoks().then(data => localStorage.setItem('pokemonsData', JSON.stringify(data)))
    }
    const store = createStore(rootReducer);
    window.store = store;

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

init();