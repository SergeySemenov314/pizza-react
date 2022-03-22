import { useDispatch, useSelector } from "react-redux";
import Good from "./Good";

const GoodsList = () => {

    const dispatch = useDispatch();
    const goodsArr = useSelector(state => state.goodsReducer.goods)

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
  