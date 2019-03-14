import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
//import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import groupReducer from './reducers/groupReducer'


const store = createStore(groupReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'))



