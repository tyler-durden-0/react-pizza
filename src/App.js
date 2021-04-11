import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'


import { Header } from './components'
import { Home, Cart } from './pages'
import { setPizzas } from './redux/actions/pizzas'

function App() {
    //делаем функцию dispatch
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then(({data}) => {
            dispatch(setPizzas(data))
        })
    },[])

    return(
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path='/' component={Home} />
                <Route exact path='/cart' component={Cart} />
            </div>
        </div>
    )
}

export default App
