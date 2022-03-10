import { useSelector } from "react-redux";
import Good from "./Good";

const GoodsList = () => {

    const goodsArr = useSelector(state => state.goodsReducer.goods)

    let addToCart = (goodObj) => {

        let cartGoods = [];

        const cartGoodsJSON = localStorage.getItem('cartGoods');

        if(cartGoodsJSON) {
            cartGoods = JSON.parse(cartGoodsJSON);
            let hasCurrentGood = {status: false, index: 0};

            cartGoods.forEach((good, index) => {
                if(goodObj.title === good.title && goodObj.dough === good.dough && goodObj.sizes === good.sizes) {
                    hasCurrentGood.status = true;
                    hasCurrentGood.index = index;
                }
            });

            if(hasCurrentGood.status) {
                console.log(cartGoods[hasCurrentGood.index])
                cartGoods[hasCurrentGood.index]['quantity']++
            } else {
                cartGoods.push(goodObj);
            }
            

        } else {
            cartGoods.push(goodObj);
        }

        localStorage.setItem('cartGoods', JSON.stringify(cartGoods));
    }



    return (
        <>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {goodsArr.map((good, index) =>
                    <Good 
                        key={`${good.title}_${index}`}
                        addToCart = {addToCart} 
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
  