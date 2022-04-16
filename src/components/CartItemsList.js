import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"

const CartItemsList = () => {
    const {cartGoods} = useSelector(({cartReducer}) => cartReducer)
    
    const dispatch = useDispatch()

    // console.log(cartGoods)

    return (
        <div className="content__items">
            {cartGoods.map((cartGood, index) => (
                <CartItem key = {cartGood.title + cartGood.dough + cartGood.sizes} cartGood={cartGood} dispatch={dispatch} />
            ))}
        </div>
    )
}

export default CartItemsList
