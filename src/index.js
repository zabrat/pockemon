import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './roots/rootReducer';
import { Provider } from 'react-redux';
import { watchRootSaga } from './roots/rootSaga';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

function init() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
    window.store = store;

    sagaMiddleware.run(watchRootSaga);

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

init();