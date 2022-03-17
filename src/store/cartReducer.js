const defaultState  = {
    cartGoods: [],
    totalPrice: 0,
    totalCount: 0
}

export const ADD_TO_CART = 'ADD_TO_CART';

export default function cartReducer (state = defaultState, action) {
    switch (action.type) {
        case ADD_TO_CART:

            let goodObj = action.payload;
            let cartGoods = [];

            const cartGoodsJSON = localStorage.getItem('cartGoods');
    
            if(cartGoodsJSON) {
                cartGoods = JSON.parse(cartGoodsJSON);
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



            
            let totalCount = cartGoods.reduce(function(sum, good) {
                return sum + good.quantity;
            }, 0);

            let totalPrice = cartGoods.reduce(function(sum, good) {
                return sum + good.price * good.quantity;
            }, 0);






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

