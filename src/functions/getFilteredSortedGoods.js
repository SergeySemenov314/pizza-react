import { getFilteredGoods } from "./getFilteredGoods";
import { getSortedGoods } from "./getSortedGoods";

export const getFilteredSortedGoods = (goodsArr, selectedFilter, selectedSort) => {
    const filteredGoodsArr = getFilteredGoods(goodsArr, selectedFilter);
    const filteredSortedGoods = getSortedGoods(filteredGoodsArr, selectedSort);
    return filteredSortedGoods
};
