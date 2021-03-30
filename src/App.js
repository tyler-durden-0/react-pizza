import React from 'react'
import {Route} from 'react-router-dom'

import logoSvg from "./assets/img/pizza-logo.svg"

import { Header } from './components'
import { Home, Cart } from './pages'

function App() {
  //где хочу там и могу написать Route
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
