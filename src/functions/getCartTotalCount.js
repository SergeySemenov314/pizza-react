
export const getCartTotalCount = (cartGoods) => {

    if(cartGoods) {
        let totalCount = cartGoods.reduce(function(sum, good) {
            return sum + good.quantity;
        }, 0);
    
        return totalCount;
    } else {
        return 0;
    }

  
}