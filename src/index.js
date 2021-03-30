import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

import './scss/app.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
      {/*если мы хотим использовать react-router - мы должны полностью обернуть наше приложение*/}
      <BrowserRouter>
          <Route exact path='/' component={App} />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);