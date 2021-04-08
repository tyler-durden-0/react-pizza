import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'


import { Header } from './components'
import { Home, Cart } from './pages'
import { setPizzas as setPizzasAction} from './redux/actions/pizzas'

function App({ setPizzas, items }) {
    useState(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setPizzas(data.pizzas)
        })
    },[])

    return(
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path='/' render={() => <Home items={items}/>} />
                <Route exact path='/cart' component={Cart} />
            </div>
        </div>
    )
}



//вызывается каждый раз после вызова диспачта
const mapStateToProps = (state) => {
    //console.log(state, "App mapStateToProps")
    return {
        items: state.pizzas.items,
        filters: state.filters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPizzas: (item) => dispatch(setPizzasAction(item))
    }
}

//соединяю компонент с Redux, connect показывает что классовый компонент App должен следить за изменением хранилища ->
//каждый раз, когда в строке будут происходить изменения хранилища App будет производить ререндер тогда когда это надо
//указываю что connect должен получать класс App
export default connect(mapStateToProps, mapDispatchToProps)(App);
