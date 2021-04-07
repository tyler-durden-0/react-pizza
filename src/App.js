import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'


import { Header } from './components'
import { Home, Cart } from './pages'
import { setPizzas } from './redux/actions/pizzas'

// function App() {
//     const [pizzas, setPizzas] = useState([])
//
//     useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => setPizzas(data.pizzas))
//         // fetch('http://localhost:3000/db.json')
//         //     .then( res => res.json())
//         //     .then(data => setPizzas(data.pizzas))
//     }, [])
//
//   //где хочу там и могу написать Route
//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route exact path='/' render={() => <Home items={pizzas}/>} />
//         <Route exact path='/cart' component={Cart} />
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
    //когда компонент будет первый раз отрендарин
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
                window.store.dispatch(setPizzas(data.pizzas))
            })
    }

    render() {
        return(
            <div className="wrapper">
                <Header />
                    <div className="content">
                        <Route exact path='/' render={() => <Home items={this.props.items}/>} />
                        <Route exact path='/cart' component={Cart} />
                    </div>
            </div>
        )
    }
}

//вызывается каждый раз после вызова диспачта
const mapStateToProps = (state) => {
    //console.log(state, "App mapStateToProps")
    return {
        items: state.pizzas.items
    }
}

//соединяю компонент с Redux, connect показывает что классовый компонент App должен следить за изменением хранилища ->
//каждый раз, когда в строке будут происходить изменения хранилища App будет производить ререндер тогда когда это надо
//указываю что connect должен получать класс App
export default connect(mapStateToProps)(App);
