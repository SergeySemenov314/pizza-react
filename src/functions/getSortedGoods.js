export const getSortedGoods = (goodsArr, selectedSort) => {
    if (goodsArr && selectedSort) {
        let sortedGoods = goodsArr;
        if (selectedSort.variant === "алфавиту") {
            sortedGoods = [...goodsArr].sort((a, b) => {
                let titleA = a.title.toLowerCase();
                let titleB = b.title.toLowerCase();
                if (titleA < titleB)
                    return -1;
                if (titleA > titleB) return 1;
                return 0; 
            });
        }
        if (selectedSort.variant === "популярности") {
            sortedGoods = [...goodsArr].sort((a, b) => {
                let ratingA = a.rating;
                let ratingB = b.rating;
                if (ratingA < ratingB)
                    return 1;
                if (ratingA > ratingB) return -1;
                return 0; 
            });
        }
        if (selectedSort.variant === "цене") {
            sortedGoods = [...goodsArr].sort((a, b) => {
                let priceA = a.price;
                let priceB = b.price;
                if (priceA < priceB)
                    return -1;
                if (priceA > priceB) return 1;
                return 0; 
            });
        }

        return sortedGoods;
    } else {
        return goodsArr;
    }
};
