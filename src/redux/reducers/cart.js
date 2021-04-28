const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum ,0)


const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PIZZA_TYPE':

            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            //здесь я храню актуальные данные при вызове этого экшэна
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allPizzas)

            return {
                //берем старые значения объекта и меняем в нем totalPrice
                ...state,
                items: newItems,
                //очень хитрая логика досчета количества всех массивов, для пределения количества добавленных пицц
                //прочитать про concat и apply
                totalCount: [].concat.apply([], items).length,
                totalPrice
            }
        case 'CLEAR_CART':
            return { totalPrice: 0, totalCount: 0, items: {} }
        case 'REMOVE_CART_ITEM':
            const new_Items = {
                ...state.items
            }
            const currentTotalCount = new_Items[action.payload].items.length
            const currentTotalPrice = new_Items[action.payload].totalPrice
            delete new_Items[action.payload]
            return{
                ...state,
                items: new_Items,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        default:
            return state
    }
}

export default cart