import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store'
import {Provider} from 'react-redux'

import './scss/app.scss';

import App from './App';

ReactDOM.render(
    /*если мы хотим использовать react-router - мы должны полностью обернуть наше приложение*/
    /*Route нельзя использовать вне BrowserRouter*/
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
  document.getElementById('root')
);