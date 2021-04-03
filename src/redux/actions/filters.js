const setSortBy = (name) => {
    return {
        type: 'SET_SORT_BY',
        payload: name
    }
}

//немного другим способом пишим action, чем setSortBy
const setCategory = (catIndex) => ({
        type: 'SET_CATEGORY',
        payload: catIndex
})