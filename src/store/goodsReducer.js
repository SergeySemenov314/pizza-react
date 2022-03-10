const defaultState  = {
    goods: []
}

export const SET_GOODS = 'SET_GOODS';

export default function goodsReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_GOODS:
            return {...state, goods: action.payload}

        default:
            return state;
    }
}

export const addGoods = (payload) => ({type: SET_GOODS, payload})

