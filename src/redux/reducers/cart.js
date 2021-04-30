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

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)

            return {
                //берем старые значения объекта и меняем в нем некоторые значения
                ...state,
                items: newItems,
                //очень хитрая логика подсчета количества всех массивов, для пределения количества добавленных пицц
                //прочитать про concat и apply
                totalCount,
                totalPrice
            }
        case 'CLEAR_CART':
            return {totalPrice: 0, totalCount: 0, items: {}}
        case 'REMOVE_CART_ITEM':
            const new_Items = {
                ...state.items
            }
            const currentTotalCount = new_Items[action.payload].items.length
            const currentTotalPrice = new_Items[action.payload].totalPrice
            delete new_Items[action.payload]
            return {
                ...state,
                items: new_Items,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        case 'PLUS_CART_ITEM':
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const new_items = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount_plus = Object.keys(new_items).reduce((sum, key) => new_items[key].items.length + sum, 0)
            const totalPrice_plus = Object.keys(new_items).reduce((sum, key) => new_items[key].totalPrice + sum, 0)

            return {
                ...state,
                items: new_items,
                totalCount: totalCount_plus,
                totalPrice: totalPrice_plus,
            };
        default:
            return state
    }
}

export default cart