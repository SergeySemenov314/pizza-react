const defaultState = {
    filter: {
        filter: 'Все',
        index: 0
    },
    sort: {
        variant: "популярности",
        index: 0,
    }
}

export const SET_SORT = "SET_SORT"
export const SET_FILTER = "SET_FILTER"


const actionMap = {
    SET_SORT: (state, action) => ({ ...state, sort: action.payload }),
    SET_FILTER: (state, action) => ({ ...state, filter: action.payload }),
}

export default function filtersReducer (state  = defaultState, action) {
    const handler = actionMap[action.type]
    return handler ? handler(state, action) : state
}

export const setSort = (payload) => ({ type: SET_SORT, payload })
export const setFilter= (payload) => ({ type: SET_FILTER, payload })
