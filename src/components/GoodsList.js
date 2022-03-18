import { useDispatch, useSelector } from "react-redux";
import Good from "./Good";

const GoodsList = () => {

    const dispatch = useDispatch();
    const goodsArr = useSelector(state => state.goodsReducer.goods)

    const cartGoods = useSelector(state => state.cartReducer.cartGoods)
    const totalCount = useSelector(state => state.cartReducer.totalCount)
    const totalPrice = useSelector(state => state.cartReducer.totalPrice)

    console.log(cartGoods)
    console.log(totalCount)
    console.log(totalPrice)

    return (
        <>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {goodsArr.map((good, index) =>
                    <Good 
                        key={`${good.title}_${index}`}
                        dispatch = {dispatch} 
                        img = {good.img}
                        title = {good.title}
                        dough = {good.dough}
                        sizes = {good.sizes}
                        price = {good.price}
                    />
                )}
            </div>
        </>
    );
  }
  
  export default GoodsList;
  