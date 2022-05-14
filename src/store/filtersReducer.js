const defaultState = {
    filter: '',
    sort: {
        variant: "популярности",
        index: 0,
    }
}

export const SET_SORT = "SET_SORT"


const actionMap = {
    SET_SORT: (state, action) => ({ ...state, sort: action.payload }),
}

export default function filtersReducer (state  = defaultState, action) {
    const handler = actionMap[action.type]
    return handler ? handler(state, action) : state
}

export const setSort = (payload) => ({ type: SET_SORT, payload })
