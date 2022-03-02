import Categories from "../components/Categories";
import Header from "../components/Header";
import Sorting from "../components/Sorting";
import GoodsList from "../components/GoodsList";


const MainPage = () => {
    return (
        <div className="wrapper">
            <Header/>
            
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sorting/>
                    </div>
                    <GoodsList />
                </div>
            </div>
        </div>

    )
}

export default MainPage;