import { useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";
import CartWithGoods from "../components/CartWithGoods";

const CartPage = () => {

    const { cartGoods } = useSelector(({ cartReducer }) => cartReducer);

    return (
        <div className="content">
            <div className="container container--cart">
                {cartGoods.length ? (
                   <CartWithGoods cartGoods = {cartGoods} />
                ) : (
                   <CartEmpty />
                )}
            </div>
        </div>
    );
};

export default CartPage;
