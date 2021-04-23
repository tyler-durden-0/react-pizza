const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PIZZA_TYPE':
            //здесь я храню актуальные данные при вызове этого экшэна
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            return {
                //берем старые значения объекта и меняем в нем totalPrice
                ...state,
                items: newItems,
                //очень хитрая логика досчета количества всех массивов, для пределения количества добавленных пицц
                //прочитать про concat и apply
                totalCount: [].concat.apply([], Object.values(newItems)).length
            }
        default:
            return state
    }
}

export default cart