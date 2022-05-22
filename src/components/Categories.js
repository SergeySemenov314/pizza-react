import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/filtersReducer";

const Categories = () => {
    const filters = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    const dispatch = useDispatch();

    const onClickFilterVariant = (filterVariant, index) => {
        dispatch(
            setFilter({
                filter: filterVariant,
                index,
            }),
        );
    };

    const filterActive = useSelector((state) => state.filtersReducer.filter);

    return (
        <div className="categories">
            <ul>
                {filters.map((filterVariant, index) =>
                    <li className={filterActive.index === index ? "active" : ''} key = {filterVariant} onClick = {() => onClickFilterVariant(filterVariant, index)}>{filterVariant}</li>
                )}
            </ul>
        </div>
    );
};

export default Categories;
