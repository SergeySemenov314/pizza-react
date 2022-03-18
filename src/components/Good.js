import {useState} from 'react';
import PropTypes from 'prop-types';
import { addToCart } from "../store/cartReducer";

const Good = ({dispatch, img, title, dough, sizes, price}) => {

    const [goodObj, setGoodObj] = useState(
        {
            img,
            title,
            dough: dough[0],
            sizes: sizes[0],
            price,
            quantity:1,
        }
    );

    const [doughItemActive, setDoughItemActive] = useState(0);

    const onClickDoughItem = (doughTitle, index) => {
        setDoughItemActive(index)
        setGoodObj({...goodObj, dough: doughTitle})
    }

    const [sizesItemActive, setSizesItemActive] = useState(0);

    const onClickSizesItem = (size, index) => {
        setSizesItemActive(index)
        setGoodObj({...goodObj, sizes: size})
    }

    let addGoodToCart = (goodObj) => {
        dispatch(addToCart(goodObj))
    }

   
    return (
        <div className="pizza-block">
            <img className="pizza-block__image"
                src={img}
                alt={title} 
                />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {dough.map((doughTitle, index) =>
                        <li 
                            key={`${doughTitle}_${index}`}
                            className={doughItemActive === index ? 'active'  : ''} 
                            onClick ={() => onClickDoughItem(doughTitle, index)}
                        >{doughTitle}</li>
                    )}
                </ul>
                <ul>
                    {sizes.map((size, index) =>
                        <li 
                            key={`${size}_${index}`}
                            className={sizesItemActive === index ? 'active'  : ''} 
                            onClick ={() => onClickSizesItem(size, index)}
                        >{size} см.</li>
                    )}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add" onClick={() => addGoodToCart(goodObj)}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white" />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    );
}

Good.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dough: PropTypes.arrayOf(PropTypes.string).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number.isRequired,
}
  
  
export default Good;
  