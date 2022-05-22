export const getFilteredGoods = (goodsArr, filterVariant) => {
    if (goodsArr && filterVariant && filterVariant !== "Все") {
        const filteresGoods = [...goodsArr].filter((good) =>
            good.categories.includes(filterVariant),
        );
        return filteresGoods
    } else {
        return goodsArr;
    }
};
