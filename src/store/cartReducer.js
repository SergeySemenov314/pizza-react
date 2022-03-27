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
export const LOAD_GOODS_FROM_LOCALSTORAGE = "LOAD_GOODS_FROM_LOCALSTORAGE"

export default function cartReducer(state = defaultState, action) {
    switch (action.type) {
        case LOAD_GOODS_FROM_LOCALSTORAGE:
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

        case ADD_TO_CART:
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
        
        case REMOVE_FROM_CART:
            let goodObj2 = action.payload
            let cartGoods2 = state.cartGoods

            if (cartGoods2.length) {
                let hasCurrentGood = findGoodInCart(cartGoods2, goodObj2)

                if (hasCurrentGood.status) {

                    if (cartGoods2[hasCurrentGood.index]["quantity"] > 1) {
                        cartGoods2[hasCurrentGood.index]["quantity"]--
                    } else {
                        cartGoods2.splice([hasCurrentGood.index], 1); 
                    }
                }
            }

            localStorage.setItem("cartGoods", JSON.stringify(cartGoods2))

            let totalPrice2 = getCartTotalPrice(cartGoods2)
            let totalCount2 = getCartTotalCount(cartGoods2)

            return {
                ...state,
                cartGoods: cartGoods2,
                totalCount: totalCount2,
                totalPrice: totalPrice2,
            }
        
        default:
            return state
    }
}

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload })
export const removeFromCart = (payload) => ({ type: REMOVE_FROM_CART, payload })
export const loadGoodsFromLocalStorage = () => ({ type: LOAD_GOODS_FROM_LOCALSTORAGE })
