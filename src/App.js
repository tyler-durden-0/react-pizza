import React from 'react'

import logoSvg from "./assets/img/pizza-logo.svg"

import { Header, Home } from './components'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
