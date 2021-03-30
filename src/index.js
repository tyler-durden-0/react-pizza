import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './scss/app.scss';

import App from './App';
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
      {/*если мы хотим использовать react-router - мы должны полностью обернуть наше приложение*/}
      <Router>
          <Route exact path='/' component={App} />
          <Route exact path='/header' component={Header} />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);