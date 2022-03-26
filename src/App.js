import "./scss/app.scss"
import MainPage from "./pages/MainPage"
import { useDispatch } from "react-redux"
import { setGoods } from "./store/goodsReducer"
import { useEffect } from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import axios from "axios"
import { loadGoodsFromLocalStorage } from "./store/cartReducer"
import Header from "./components/Header"
import CartPage from "./pages/CartPage"

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:3000/db.json").then(({ data }) => {
            dispatch(setGoods(data.goods))
        })

        dispatch(loadGoodsFromLocalStorage())
    }, [])

    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
