const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PIZZA_TYPE':
            return {
                //берем старые значения объекта и меняем в нем totalPrice
                ...state,
                items: {
                    [action.payload.id]: !state.items[action.payload.id]
                        ? [action.payload]
                        : [...state.items[action.payload.id], action.payload]
                }
            }
        default:
            return state
    }
}

export default cart