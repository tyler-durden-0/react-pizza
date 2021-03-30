import React from 'react'

import logoSvg from "./assets/img/pizza-logo.svg"

import { Header } from './components'
import { Home, Cart } from './pages'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Cart/>
      </div>
    </div>
  );
}

export default App;
