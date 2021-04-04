import { createStore, combineReducers } from 'redux'

import filtersReducer from './reducers/filters'
import pizzasReducer from './reducers/pizzas'

const rootReducer = combineReducers({
    filtersReducer,
    pizzasReducer
})

const store = createStore(rootReducer)

export default store