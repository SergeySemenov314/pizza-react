import { findGoodInCart } from "../functions/findGoodInCart"
import { getCartTotalCount } from "../functions/getCartTotalCount"
import { getCartTotalPrice } from "../functions/getCartTotalPrice"

const defaultState = {
    cartGoods: [],
    totalPrice: 0,
    totalCount: 0,
}

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const REMOVE_GOOD_COMPLETELY_FROM_CART = "REMOVE_GOOD_COMPLETELY_FROM_CART"
export const REMOVE_ALL_GOODS_FROM_CART = "REMOVE_ALL_GOODS_FROM_CART"
export const LOAD_GOODS_FROM_LOCALSTORAGE = "LOAD_GOODS_FROM_LOCALSTORAGE"

const actionMap = {
    LOAD_GOODS_FROM_LOCALSTORAGE: (state, action) => {
        let cartGoodsArr = []
        let totalPriceInitial = 0
        let totalCountInitial = 0

        const cartGoodsJSON = localStorage.getItem("cartGoods")

        if (cartGoodsJSON) {
            cartGoodsArr = JSON.parse(cartGoodsJSON)
            totalPriceInitial = getCartTotalPrice(cartGoodsArr)
            totalCountInitial = getCartTotalCount(cartGoodsArr)
        }

        return {
            ...state,
            cartGoods: cartGoodsArr,
            totalCount: totalCountInitial,
            totalPrice: totalPriceInitial,
        }
    },

    ADD_TO_CART: (state, action) => {
        let goodObj = action.payload
        let cartGoods = state.cartGoods

        if (cartGoods.length) {
            let hasCurrentGood = findGoodInCart(cartGoods, goodObj)

            if (hasCurrentGood.status) {
                cartGoods[hasCurrentGood.index]["quantity"]++
            } else {
                cartGoods.push(goodObj)
            }
        } else {
            cartGoods.push(goodObj)
        }

        localStorage.setItem("cartGoods", JSON.stringify(cartGoods))

        let totalPrice = getCartTotalPrice(cartGoods)
        let totalCount = getCartTotalCount(cartGoods)

        return {
            ...state,
            cartGoods: cartGoods,
            totalCount: totalCount,
            totalPrice: totalPrice,
        }
    },

    REMOVE_FROM_CART: (state, action) => {
        let goodObj = action.payload
        let cartGoods = state.cartGoods

        if (cartGoods.length) {
            let hasCurrentGood = findGoodInCart(cartGoods, goodObj)

            if (hasCurrentGood.status) {

                if (cartGoods[hasCurrentGood.index]["quantity"] > 1) {
                    cartGoods[hasCurrentGood.index]["quantity"]--
                } else {
                    cartGoods.splice([hasCurrentGood.index], 1); 
                }
            }
        }

        localStorage.setItem("cartGoods", JSON.stringify(cartGoods))

        let totalPrice2 = getCartTotalPrice(cartGoods)
        let totalCount2 = getCartTotalCount(cartGoods)

        return {
            ...state,
            cartGoods: cartGoods,
            totalCount: totalCount2,
            totalPrice: totalPrice2,
        }
    },

    REMOVE_GOOD_COMPLETELY_FROM_CART: (state, action) => {
        let goodObj = action.payload
        let cartGoods = state.cartGoods

        if (cartGoods.length) {
            let hasCurrentGood = findGoodInCart(cartGoods, goodObj)

            if (hasCurrentGood.status) {
                cartGoods.splice([hasCurrentGood.index], 1); 
            }
        }

        localStorage.setItem("cartGoods", JSON.stringify(cartGoods))

        let totalPrice = getCartTotalPrice(cartGoods)
        let totalCount = getCartTotalCount(cartGoods)

        return {
            ...state,
            cartGoods: cartGoods,
            totalCount: totalCount,
            totalPrice: totalPrice,
        }
    },

    REMOVE_ALL_GOODS_FROM_CART: (state, action) => {
        localStorage.setItem("cartGoods", JSON.stringify([]))

        return {
            ...state,
            cartGoods: [],
            totalCount: 0,
            totalPrice: 0,
        }
    },

}

export default function cartReducer (state  = defaultState, action) {
    const handler = actionMap[action.type]
    return handler ? handler(state, action) : state
}


export const addToCart = (payload) => ({ type: ADD_TO_CART, payload })
export const removeFromCart = (payload) => ({ type: REMOVE_FROM_CART, payload })
export const removeGoodCompletelyFromCart = (payload) => ({ type: REMOVE_GOOD_COMPLETELY_FROM_CART, payload })
export const removeAllGoodsFromCart = () => ({ type: REMOVE_ALL_GOODS_FROM_CART})
export const loadGoodsFromLocalStorage = () => ({ type: LOAD_GOODS_FROM_LOCALSTORAGE })
