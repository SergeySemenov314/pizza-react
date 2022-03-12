import './scss/app.scss';
import MainPage from './pages/MainPage';
import { useDispatch } from 'react-redux';
import { addGoods } from './store/goodsReducer';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(addGoods(data.goods))
        }) 
    }, [])
    



    


  return (
    <MainPage/>
  );
}

export default App;
