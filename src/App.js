import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'

import store from './redux/store'

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
        axios.get('http://localhost:3000/db.json').then(({data}) => store.dispatch(setPizzas(data.pizzas)))
    }

    render() {
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
}

export default App;
