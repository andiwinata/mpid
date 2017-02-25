import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { AppContainer } from './components/App'

import reducer from './reducer';

const initialState = {
    selectedTickers: [],
    shownTickers: [],
    test: "HELLO WORLD"
}

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, document.getElementById('app'));