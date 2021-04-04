const initialState = {
    items: [],
    isLoaded: false
}

const pizzas = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PIZZAS':
            return {
                //берем старые значения объекта и меняем в нем sortBy
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default pizzas