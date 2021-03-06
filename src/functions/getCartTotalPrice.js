
export const getCartTotalPrice = (cartGoods) => {

    if(cartGoods) {
        let totalPrice = cartGoods.reduce(function(sum, good) {
            return sum + good.price * good.quantity;
        }, 0);

        return totalPrice;
    } else {
        return 0;
    }

}