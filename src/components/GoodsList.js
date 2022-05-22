import { useDispatch, useSelector } from "react-redux";
import { getFilteredSortedGoods } from "../functions/getFilteredSortedGoods";
import Good from "./Good";

const GoodsList = () => {
    const dispatch = useDispatch();
    const goodsArr = useSelector((state) => state.goodsReducer.goods);
    const selectedSort = useSelector((state) => state.filtersReducer.sort);
    const selectedFilter = useSelector((state) => state.filtersReducer.filter);

    const filteredSortedGoods = getFilteredSortedGoods(
        goodsArr,
        selectedFilter.filter,
        selectedSort,
    );

    return (
        <>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {filteredSortedGoods.map((good, index) => (
                    <Good
                        key={`${good.title}_${index}`}
                        dispatch={dispatch}
                        img={good.img}
                        title={good.title}
                        dough={good.dough}
                        sizes={good.sizes}
                        price={good.price}
                    />
                ))}
            </div>
        </>
    );
};

export default GoodsList;
