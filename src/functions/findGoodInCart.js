export const findGoodInCart = (cartGoods, goodObj) => {
    let hasGood = { status: false, index: 0 }

    cartGoods.forEach((good, index) => {
        if (
            goodObj.title === good.title &&
            goodObj.dough === good.dough &&
            goodObj.sizes === good.sizes
        ) {
            hasGood.status = true
            hasGood.index = index
        }
    })

    return hasGood
}
