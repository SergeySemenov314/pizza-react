const defaultState = {
    goods: [],
}

export const SET_GOODS = "SET_GOODS"


const actionMap = {
    SET_GOODS: (state, action) => ({ ...state, goods: action.payload }),
}

export default function goodsReducer (state  = defaultState, action) {
    const handler = actionMap[action.type]
    return handler ? handler(state, action) : state
}

export const setGoods = (payload) => ({ type: SET_GOODS, payload })
