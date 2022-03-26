import { useSelector } from "react-redux"
import CartItem from "./CartItem"

const CartItemsList = () => {
    const cartGoods = useSelector((state) => state.cartReducer.cartGoods)
    console.log(cartGoods)

    return (
        <div className="content__items">
            {cartGoods.map((cartGood) => (
                <CartItem cartGood={cartGood} />
            ))}
        </div>
    )
}

export default CartItemsList
