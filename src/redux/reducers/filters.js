const initialState = {
    category: 0,
    sortBy: 'popular'
}

const filters = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SORT_BY':
            return {
                //берем старые значения объекта и меняем в нем sortBy
                ...state,
                sortBy: action.payload
            }
        default:
            return state
    }
}

export default filters