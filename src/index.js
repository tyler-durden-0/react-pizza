import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore } from 'redux'

import './scss/app.scss';

import App from './App';

function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = createStore(counter)
store.subscribe(() => console.log('хранилище изменилось ', store.getState()))
console.log('текущее хначение ', store.getState())
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "DECREMENT"})


ReactDOM.render(
  <React.StrictMode>
      {/*если мы хотим использовать react-router - мы должны полностью обернуть наше приложение*/}
      {/*Route нельзя использовать вне BrowserRouter*/}
      <Router>
          <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);