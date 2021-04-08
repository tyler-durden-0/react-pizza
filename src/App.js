import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


import { Header } from './components'
import { Home, Cart } from './pages'
import { setPizzas } from './redux/actions/pizzas'

function App() {
    //делаем функцию dispatch
    const dispatch = useDispatch()

    //хочу вытащить из store фильтрацию и сами пиццы
    const hranilishe = useSelector(({ pizzas, filters }) => {
        return {
            items: pizzas.items,
            sortBy: filters.sortBy
        }
    })
    console.log(hranilishe)

    useState(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas))
        })
    },[])

    return(
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path='/' render={() => <Home items={[]}/>} />
                <Route exact path='/cart' component={Cart} />
            </div>
        </div>
    )
}

export default App
