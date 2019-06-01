import React from 'react'
import ReactDOM from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers'

import Router from  './Router'

import './index.css'
// import App from './App'
import * as serviceWorker from './serviceWorker'

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import './index.css'

const store = createStore(
        reducers,
        // undefined,
        composeWithDevTools(applyMiddleware(thunk))
    )

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
