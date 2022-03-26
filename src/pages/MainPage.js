import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import GoodsList from "../components/GoodsList";


const MainPage = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sorting/>
                </div>
                <GoodsList />
            </div>
        </div>
    )
}

export default MainPage;