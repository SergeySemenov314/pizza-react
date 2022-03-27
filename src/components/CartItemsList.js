import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"

const CartItemsList = () => {
    const cartGoods = useSelector((state) => state.cartReducer.cartGoods)
    const dispatch = useDispatch()

    // console.log(cartGoods)

    return (
        <div className="content__items">
            {cartGoods.map((cartGood) => (
                <CartItem cartGood={cartGood} dispatch={dispatch} />
            ))}
        </div>
    )
}

export default CartItemsList
