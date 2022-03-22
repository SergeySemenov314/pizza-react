import './scss/app.scss';
import MainPage from './pages/MainPage';
import { useDispatch } from 'react-redux';
import { setGoods } from './store/goodsReducer';
import { useEffect } from 'react';
import axios from 'axios';
import { loadGoodsFromLocalStorage } from './store/cartReducer';
import CartPage from './pages/CartPage';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setGoods(data.goods))
        }) 

        dispatch(loadGoodsFromLocalStorage())
    }, [])
    
  return (
    <MainPage/>
    // <CartPage/>
  );
}

export default App;
