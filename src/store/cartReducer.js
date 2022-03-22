import { getCartTotalCount } from "../functions/getCartTotalCount";
import { getCartTotalPrice } from "../functions/getCartTotalPrice";

const defaultState  = {
    cartGoods: [],
    totalPrice: 0,
    totalCount: 0
}

export const ADD_TO_CART = 'ADD_TO_CART';
export const LOAD_GOODS_FROM_LOCALSTORAGE = 'LOAD_GOODS_FROM_LOCALSTORAGE';

export default function cartReducer (state = defaultState, action) {
    switch (action.type) {
        case LOAD_GOODS_FROM_LOCALSTORAGE:

            let cartGoodsArr = [];
            let totalPriceInitial = 0;
            let totalCountInitial = 0;

            const cartGoodsJSON = localStorage.getItem('cartGoods');

            if(cartGoodsJSON) {
                cartGoodsArr = JSON.parse(cartGoodsJSON);
                totalPriceInitial = getCartTotalPrice(cartGoodsArr);
                totalCountInitial = getCartTotalCount(cartGoodsArr);
            }
           

            return {
                ...state,
                cartGoods: cartGoodsArr,
                totalCount: totalCountInitial,
                totalPrice: totalPriceInitial,
            }

        case ADD_TO_CART:

            let goodObj = action.payload;
            let cartGoods = state.cartGoods;
    
            if(cartGoods.length) {
                let hasCurrentGood = {status: false, index: 0};
    
                cartGoods.forEach((good, index) => {
                    if(goodObj.title === good.title && goodObj.dough === good.dough && goodObj.sizes === good.sizes) {
                        hasCurrentGood.status = true;
                        hasCurrentGood.index = index;
                    }
                });
    
                if(hasCurrentGood.status) {
                    cartGoods[hasCurrentGood.index]['quantity']++
                } else {
                    cartGoods.push(goodObj);
                }
                
    
            } else {
                cartGoods.push(goodObj);
            }
    
            localStorage.setItem('cartGoods', JSON.stringify(cartGoods));


            let totalPrice = getCartTotalPrice(cartGoods);
            let totalCount = getCartTotalCount(cartGoods);

            return {
                ...state,
                cartGoods: cartGoods,
                totalCount: totalCount,
                totalPrice: totalPrice,
            }

        default:
            return state;
    }
}

export const addToCart = (payload) => ({type: ADD_TO_CART, payload})
export const loadGoodsFromLocalStorage = () => ({type: LOAD_GOODS_FROM_LOCALSTORAGE})

