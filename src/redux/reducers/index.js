import { combineReducers } from 'redux'

import filtersReducer from './filters'
import pizzasReducer from './pizzas'
import cartReducer from './cart'

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
    //можно записать благодаря ES-6 как
    //filters,
    //pizzas,
    //cart
})

export default rootReducer