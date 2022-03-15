import { applyMiddleware, combineReducers, createStore } from "redux";
import goodsReducer from "./goodsReducer";
import cartReducer from "./cartReducer";



const rootReducer = combineReducers({
    goodsReducer,
    cartReducer,
})

export const store = createStore(rootReducer)
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

