//Action creator
export const setSortBy = ({ type, order }) => {
    return {
        type: 'SET_SORT_BY',
        payload: { type, order }
    }
}

//Action
// const setSortBy = {
//     return {
//         type: 'SET_SORT_BY'
//     }
// }

//немного другим способом пишим action, чем setSortBy
export const setCategory = (catIndex) => ({
        type: 'SET_CATEGORY',
        payload: catIndex
})