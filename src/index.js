import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store'

import './scss/app.scss';

import App from './App';

console.log(store)

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