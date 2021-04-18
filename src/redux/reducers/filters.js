const initialState = {
    category: null,
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
        case 'SET_CATEGORY':
            return {
                //берем старые значения объекта и меняем в нем sortBy
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}

export default filters