import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
//import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import groupReducer from './reducers/groupReducer'
import viewReducer from './reducers/viewReducer'

const reducer = combineReducers({
    group: groupReducer,
    view: viewReducer
})
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'))



