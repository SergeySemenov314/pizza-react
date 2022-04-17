import { useDispatch } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = ({ cartGoods }) => {
    const dispatch = useDispatch();

    return (
        <div className="content__items">
            {cartGoods.map((cartGood, index) => (
                <CartItem
                    key={cartGood.title + cartGood.dough + cartGood.sizes}
                    cartGood={cartGood}
                    dispatch={dispatch}
                />
            ))}
        </div>
    );
};

export default CartItemsList;
