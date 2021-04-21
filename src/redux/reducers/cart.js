const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TOTAL_PRICE':
            return {
                //берем старые значения объекта и меняем в нем totalPrice
                ...state,
                totalPrice: action.payload
            }
        case 'SET_TOTAL_COUNT':
            return {
                //берем старые значения объекта и меняем в нем totalCount
                ...state,
                totalCount: action.payload
            }
        default:
            return state
    }
}

export default cart